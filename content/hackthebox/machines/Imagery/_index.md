---
title: Imagery
weight: 751
tags:
  - linux
  - medium
---

## 0. 摘要

> 关键词：

1. 端口扫描
	1. 22 SSH
	2. 8000 Web服务
2. 注册一个用户，发现以下功能
	1. 上传图片
	2. bug report
3. bug report处可以用盲XSS打管理员Cookie
4. 拿到管理员Cookie之后，在管理员日志下载处发现文件读取
5. 读取 `/proc/self/cmdline` 发现程序是 python 启动的 `app.py`
6. 尝试逐层目录寻找，最终读取到 `../app.py` 的具体内容
7. 根据代码中 `import` 的内容找到...
8. 然后找到 testuser 账户，并审计代码发现RCE功能点
9. RCE之后找到一个 backup 文件，爆破得到密码