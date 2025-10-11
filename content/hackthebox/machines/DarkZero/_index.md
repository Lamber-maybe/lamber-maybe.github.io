---
title: DarkZero
weight: 754
tags:
  - windows
  - hard
  - mssql
  - kerberoast
---

## 00. 摘要

靶机提供了初始账户 `john.w / RFulUtONCOL!`

信息收集，发现该账户可以登录mssql服务

mssql服务发现可以 use_link

然后上传msf，用local_exp搜索本地提权

提权到SYSTEM

然后在机器上监听，另一台机器 xp_dirtree 访问，拿到TGT

保存该TGT，然后 DCSync 直接 dump hash