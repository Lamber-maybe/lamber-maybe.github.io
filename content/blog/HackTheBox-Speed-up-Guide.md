---
title: HackTheBox提速指南
date: 2024-10-18
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
tags:
  - HackTheBox
---


## 方案一: Clash
> 优点: 简单，成本较低（可以选择买一个好梯子强行提速）
> 
> 缺点: 稳定性一般，延迟较高（日常120ms左右），多机器协作麻烦

<!-- more -->

### 1. 本机作为攻击机（openvpn开在本机上）
直接在 openvpn 文件中添加
```text
socks-proxy 127.0.0.1 7890
```

注: 7890代表 Clash 的端口

### 2. kali虚拟机作为攻击机（openvpn开在kali上）
在本机上打开 Clash，并打开Clash设置中的 `Allow LAN`

然后找到本机和kali虚拟机同网段的ip地址，如
```text
本机ip: 192.168.40.1
kali ip: 192.168.40.128
```

然后在 openvpn 文件中添加
```text
socks-proxy 192.168.40.1 7890
```


### 3. 注意事项

HackThebox在提供openvpn配置文件时，可以选择 UDP 协议或者 TCP 协议。对于大多数梯子来说，对于UDP协议的支持都比较一般，所以更推荐 TCP 协议（虽然相对来说会慢一点点）

如果使用的是TCP协议的配置文件，则将上文中提到的 `socks-proxy` 修改为 `http-proxy` 即可：

```text
http-proxy 192.168.40.1 7890
```


## 方案二: Zerotire组网
> 优点: 足够稳定（3个月期间从未出现断连情况），延迟低（日常70ms左右，几乎只剩下物理距离导致的延迟），多机器协作方便
> 
> 缺点: 成本比clash高一点，需要vps，操作上比Clash方案麻烦一点（但是弄好之后一劳永逸）


1. 首先整一个英国伦敦的vps（离HackTheBox机房近）
2. 在vps上运行openvpn（这时会看到多出来一张网卡 `tun0` 记住这个网卡名字）
3. 在vps上安装 Zerotire 并设置为 [exitnode](https://docs.zerotier.com/exitnode)

```bash
# 安装
$ curl -s https://install.zerotier.com | sudo bash

# 在Zerotire网页端创建一个网络，然后记下这个网络的nwid，将vps加入这个网络
$ sudo zerotier-cli join <nwid>

# 启用ipv4转发，在 /etc/sysctl.conf 添加一行 net.ipv4.ip_forward = 1
$ sudo nano /etc/sysctl.conf

# 重新加载sysctl.conf
$ sudo sysctl -p

# 验证是否启用成功
$ sudo sysctl net.ipv4.ip_forward

# 查看网卡信息，记下Zerotire网卡的名称，假设这里是叫 zthnhhqofq
$ export ZT_IF=zthnhhqofq
$ export WAN_IF=tun0

# 配置iptables
$ sudo iptables -t nat -A POSTROUTING -o $WAN_IF -j MASQUERADE
$ sudo iptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
$ sudo iptables -A FORWARD -i $ZT_IF -o $WAN_IF -j ACCEPT

# 保存iptables设置
$ sudo apt-get install iptables-persistent
$ sudo netfilter-persistent save
```

然后到 Zerotire 控制面板处 `Add Routes`

```text
Destination: 10.10.0.0/16
Via: [vps 的 zerotire接口ip]
```

最后只需要把攻击机加入这个Zerotire网络就行了（无所谓本机还是kali，只要加入这个Zerotire网络就都能使用）
```bash
$ sudo zerotier-cli join <nwid>
```

## 附录一: 如何设置Openvpn自行启动

按照以下步骤操作即可:

```bash
# 确保 /etc/openvpn/client/ 目录存在
sudo mkdir -p /etc/openvpn/client

# 将你的 HTB ovpn 文件复制过去，并重命名为 htb.conf
sudo cp ~/Downloads/your_user.ovpn /etc/openvpn/client/htb.conf

# 立即启动 HTB VPN 连接
sudo systemctl start openvpn-client@htb.service

# 将该服务设置为开机时自动启动
sudo systemctl enable openvpn-client@htb.service
```