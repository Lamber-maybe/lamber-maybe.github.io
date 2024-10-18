---
title: "Ubuntu22.04搭建WEB环境(LAMP环境)"
date: 2024-10-18 01:10:00 +0800

---

> LAMP 环境即 （Linux + Apache + Mysql + PHP）集成环境

## 1. 更新源
首先更新 Ubuntu22.04 中的所有东西
```bash=
# 1. 备份
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak

# 2. 换源
sudo vim /etc/apt/sources.list

# 使用vim修改配置内容如下（原有内容直接添加 #(井号) 进行注释）
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse

# 3. 更新源
sudo apt-get update 

# 4. 更新软件
sudo apt-get upgrade

# 5. 更新系统软件 
sudo apt-get dist-upgrade
```

## 2. 安装Apache2
```bash=
# 1. 安装
sudo apt install apache2 -y

# 2. 检查 Apache2 是否开启
systemctl status apache2
```

## 3. 安装MySQL
```bash=
# 1. 安装
sudo apt install mysql-server mysql-client

# 2. 查看MySQL是否安装成功
sudo mysql
```

## 4. 安装PHP
```bash=
# 1. 安装 PHP
sudo apt-get install php

# 2. 查看PHP是否安装成功
sudo php -v
```

## 5. 将PHP与Apache2和MySQL关联
```bash=
# 1. 与 Apache2 关联
$ sudo apt-get install libapache2-mod-php

# 2. 与 MySQL 关联
$ sudo apt-get install php-mysql
```

## 6. 修改Apache2配置文件
```bash=
# 第一步 打开Apache2配置文件(不熟悉vim操作的情况下, 可以先查一下vim的基础用法)
sudo vim /etc/apache2/mods-available/phpX.X.conf  
# 注意, 这里的X代表的是php的版本号, 在不知道版本号的情况下, 可以在 
# 输入 /etc/apache2/mods-available/php 的时候, 连续按两次tab键, 就可以显示出是什么版本的php.

# 第二步 修改配置文件
# 如果第一行的内容是(没有的话就不管了)
<FilesMatch ".+\.ph(ar|p|tml)$">
# 则将其改成
<FilesMatch ".+\.ph(ar|p|tml)|htm|html$">

# 第三步 重启Apache2
sudo service apache2 restart
```

## 7. 测试环境是否搭建成功
```bash=
# 1. 切换到 html 目录下
cd /var/www/html

创建两个测试用的文件
vim test.php
vim test.html
```

这两个测试文件都写入如下内容


`phpinfo();`

保存之后, 通过浏览器访问 `http://<your_ip>/index.php` 如果看到phpinfo界面，则说明php环境正常。
通过浏览器访问 `http://<your_ip>/index.html` 如果看到phpinfo界面，则说明LAMP环境正常。

## 附: 一些常用命令
```bash=
# Apache相关
sudo apache2 start      # 开启 Apache2
sudo apache2 stop       # 关闭 Apache2
sudo apache2 restart    # 重启 Apache2

# MySQL相关

进入数据库
sudo mysql

创建用户
CREATE USER 'username'@'%' IDENTIFIED BY 'password';

赋予用户对所有 表 增删改查的权利
GRANT ALL ON *.* TO 'username'@'%';
或
GRANT SELECT,DELETE,INSERT,UPDATE ON 数据库.* TO 用户名@'127.0.0.1';

用户登录
sudo mysql -u username -p # 回车之后输入密码
```
