---
layout: post
title:  "Uninstall ubuntu kernel!"
date:   2016-02-03 14:57:32 +0800
categories: ubuntu linux
---
```
dpkg --get-selections|grep linux
uname -a
sudo apt-get remove ***
dpkg --get-selections | grep deinstall | sed 's/deinstall/\lpurge/' | sudo dpkg --set-selections; sudo dpkg -Pa
```
