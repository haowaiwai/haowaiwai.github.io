---
layout: post
title: "设置mysql自启动"
date: 2014-01-16 15:10
comments: true
categories: 
---
## 设置自启动 ##
sudo update-rc.d -f mysql defaults
## 设置不启动 ##
sudo update-rc.d -f mysql remove