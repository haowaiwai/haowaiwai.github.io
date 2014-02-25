---
layout: post
title: "设置ubuntu 默认不启动图形界面"
date: 2014-02-25 16:42
comments: true
categories: 
---
```
/etc/default/grub
#增加text
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash text"
sudo update-grub
```