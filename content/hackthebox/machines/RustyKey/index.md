---
title: RustyKey
date: 2025-11-06
weight: -669
tags:
  - windows
  - hard
  - readgmsapassword
  - rbcd
---

## 00. 摘要

信息收集

```bash
$ rustscan -u 5000 -a 10.129.232.127
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
Open ports, closed hearts.

[~] The config file is expected to be at "/home/lambermaybe/.rustscan.toml"
[~] Automatically increasing ulimit value to 5000.
Open 10.129.232.127:53
Open 10.129.232.127:88
Open 10.129.232.127:135
Open 10.129.232.127:139
Open 10.129.232.127:389
Open 10.129.232.127:445
Open 10.129.232.127:464
Open 10.129.232.127:593
Open 10.129.232.127:3268
Open 10.129.232.127:5985
Open 10.129.232.127:9389
Open 10.129.232.127:47001
Open 10.129.232.127:49664
Open 10.129.232.127:49665
Open 10.129.232.127:49669
Open 10.129.232.127:49666
Open 10.129.232.127:49671
Open 10.129.232.127:49678
Open 10.129.232.127:49681
Open 10.129.232.127:49679
Open 10.129.232.127:49682
Open 10.129.232.127:49685
Open 10.129.232.127:49700


netexec smb 10.129.232.127 -u 'rr.parker' -p '8#t5HE8L!W3A' --shares
```

尝试访问，发现报错无法使用ntlm，然后使用 getTGT 获取票据改用 kerberos 访问

```bash
impacket-getTGT 'rustykey.htb'/'rr.parker':'8#t5HE8L!W3A'

export KRB5CCNAME=rr.parker.ccache

rusthound-ce -d 'rustykey.htb' -u 'rr.parker' -k -no-pass -f 'DC.rustykey.htb' -z
```

`/etc/krb5.conf` 配置内容如下

```
[libdefaults]
  default_realm = RUSTYKEY.HTB
  dns_lookup_realm = false
  dns_lookup_kdc = false

[realms]
  RUSTYKEY.HTB = {
    kdc = dc.rustykey.htb
    admin_server = dc.rustykey.htb
  }

[domain_realm]
  .rustykey.htb = RUSTYKEY.HTB
  rustykey.htb = RUSTYKEY.HTB
```

暂时没分析出有用的信息

继续枚举用户，