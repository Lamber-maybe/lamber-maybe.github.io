---
title: Kerberos之ASREProast攻击
date: 2025-09-23
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
tags:
  - asreproast
---


由于某些应用程序不支持 Kerberos 预身份验证，因此常常会发现用户禁用了Kerberos预身份验证。这就允许攻击者为这些用户请求TGT，攻击者拿到TGT之后，可以进行离线破解得到用户的密码。

