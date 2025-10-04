---
title: Granny
weight: 14
prev: /hackthebox/machines
tags:
  - windows
  - easy
  - iis
  - cve-2017-7269
  - ms15-051
---


## 00. 摘要

1. 端口扫描，发现开放80端口
2. 使用 Wappalyzer 进行服务识别，发现是 `IIS 6.0`
3. 经过搜索，发现 `IIS 6.0` 存在漏洞
4. 使用 msf 的 `exploit/windows/iis/iis_webdav_upload_asp` 攻击拿到 web 权限
5. 使用 msf 的 `local_exploit_suggester` 检索本地提权方式
6. 使用 msf 的 `exploit/windows/local/ms15_051_client_copy_image` 进行提权

{{< asciinema file="msf.cast" poster="npt:0:10.5" markers="7.0:搜索IIS相关漏洞, 12.0:CVE-2017-7269, 51.0:检索提权方式, 95.0:MS15-051, 116.0:迁移到高权限进程进行提权, 140.0:提权成功" >}}

本质是HTTP的 PUT、MOVE请求方法没禁用。先 PUT 方法上传一个 txt 文件，然后通过 MOVE 方法将该文件后缀修改为 asp。