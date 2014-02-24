---
layout: post
title: "LINUX常用网络命令"
date: 2014-02-24 18:09
comments: true
categories: 
---
## 查看当前监听80端口的程序 ##
```
lsof -i :80
```
## 查看当前网卡的物理地址 ##
```
ifconfig eth0 | head -1 | awk '{print $5}'
```
## 同一个网卡增加第二个IP地址 ##
```
#在网卡eth0上增加一个1.2.3.4的IP：
sudo ifconfig eth0:0 1.2.3.4 netmask 255.255.255.0
#删除增加的IP：
sudo ifconfig eth0:0 down
```
## 立即让网络支持nat ##
```
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
sudo iptables -t nat -I POSTROUTING -j MASQUERADE
```
## 查看路由信息 ##
```
netstat -rn
sudo route -n
```
## 增加和删除路由 ##
```
sudo route add -net 192.168.0.0 netmask 255.255.255.0 gw 172.16.0.1
sudo route del -net 192.168.0.0 netmask 255.255.255.0 gw 172.16.0.1
```
## 统计当前IP连接的个数 ##
```
netstat -na|grep ESTABLISHED|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -r -n
netstat -na|grep SYN|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -r -n
netstat -ntu | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -n
```