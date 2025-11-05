---
title: Hercules
date: 2025-10-23
weight: 778
tags:
  - windows
  - insane
  - winrm
  - rid-cycling
---

![hercules_rank.png](hercules_rank.png)

## 00. 摘要

1. 扫目录
2. 利用kerberos pre_auth进行用户名枚举
3. LDAP注入
4. 任意文件读取
5. Cookie伪造越权
6. 文件上传+NTLM反射
7. Shadow Credential
8. ACL滥用
9. ADCS ESC3
10. 恶意利用运维脚本
11. 使用无SPN的账户进行基于资源的约束性委派

```bash
$ rustscan -u 5000 -a 10.129.162.185   
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
With RustScan, I scan ports so fast, even my firewall gets whiplash 💨

[~] The config file is expected to be at "/home/lambermaybe/.rustscan.toml"
[~] Automatically increasing ulimit value to 5000.
Open 10.129.162.185:53
Open 10.129.162.185:80
Open 10.129.162.185:88
Open 10.129.162.185:135
Open 10.129.162.185:139
Open 10.129.162.185:389
Open 10.129.162.185:443
Open 10.129.162.185:445
Open 10.129.162.185:464
Open 10.129.162.185:593
Open 10.129.162.185:636
Open 10.129.162.185:3268
Open 10.129.162.185:3269
Open 10.129.162.185:9389
Open 10.129.162.185:49556
Open 10.129.162.185:49580
Open 10.129.162.185:49664
Open 10.129.162.185:49668
Open 10.129.162.185:50811
Open 10.129.162.185:58667
Open 10.129.162.185:58674
```

