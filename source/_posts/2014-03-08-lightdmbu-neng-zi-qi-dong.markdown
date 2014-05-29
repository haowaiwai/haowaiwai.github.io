---
layout: post
title: "lightdm不能自启动"
date: 2014-03-08 18:47
comments: true
categories: 
---
## 卸载xubuntu之后，lightdm不能自启动 ##
### 需要手动启动 ###
```
sudo service lightdm start
```
### 可能删除下面的软件 ###
```
sudo apt-get install lightdm-gtk-greeter
```