---
title: RID Cycling
date: 2025-10-15
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
tags:
  - rid-cycling
---


## 原理

RID Cycling是一种允许攻击者通过暴力破解或猜测RID和SID来枚举域对象的攻击方法，其原理基于RID是顺序排列的这一事实。

## 相关工具

netexec

```bash
netexec smb <IP> -u 'user' -p 'pass' --rid-brute
```

impacket

```bash
impacket-lookupsid 'domain'/'username':'password'@'<targetName or address>'
```

[ridenum](https://github.com/trustedsec/ridenum)

```
./ridenum.py 192.168.1.50 500 50000 /root/dict.txt /root/user.txt
```

## 参考链接

1.  [The Hacker Recipes - RID Cycling](https://www.thehacker.recipes/ad/recon/ms-rpc#rid-cycling)