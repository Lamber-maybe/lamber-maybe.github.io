---
title: Granny
weight: 14
prev: /hackthebox/mahines
tags:
  - windows
  - easy
  - iis
---


## 1. 信息收集

> [!note]
> 机器ip：`10.10.10.15`
> 攻击机ip：10.10.

[[端口扫描]]：只开放了80端口([[80,443 - Web]])

使用 [[Nmap]] 的脚本扫描，发现用的是IIS 6.0，并且系统支持PUT，MOVE等方法

使用 [[Metasploit Framework]]，`search iis` 找到一个符合条件的模块 `iis_webdav_upload_asp`

提权用 msf 的 `local_exploit_suggester` 模块

找到提权方式之后，尝试利用，发现权限不够，使用 `migrate` 迁移到高权限进程。然后再提权，提权成功。
