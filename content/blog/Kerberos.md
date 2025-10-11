---
title: Kerberos认证解读
date: 2025-09-23
tags:
  - kerberos
---

## 00. 施工中...

Kerberos认证一共经过三个阶段

```
                        KDC
client               AS      TGS     service
       -- AS-REQ ->
       <- AS-REP --
       
       -----  TGS-REQ  ----->
       <----  TGS-REP  ------
       
       ----------------------------> 

```


细节如下


## S4U2Self



## S4U2Proxy