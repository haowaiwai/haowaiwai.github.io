---
layout: post
title: "端口映射"
date: 2013-07-24 14:07
comments: true
categories: 
---
# DMZ全地址映射 #
`iptables -t nat -I POSTROUTING -s 10.1.1.2 -j SNAT --to-source 201.1.1.1`

`iptables -t nat -I PREROUTING -d 201.1.1.2 -j DNAT --to-destination 10.1.1.2`

# TELNET服务器映射 #
`iptables -t nat -I POSTROUTING -s 10.1.1.3 -p tcp --sport 23 -j SNAT --to-source 201.1.1.1`

`iptables -t nat -I PREROUTING -d 201.1.1.2 -p tcp --dport 23 -j DNAT --to-destination 10.1.1.3`

# 查看配置 #
`iptables -t nat -L`

