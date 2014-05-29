---
layout: post
title: "Vmware Easy Install ubuntu12.04 无法切换到图形界面"
date: 2014-02-25 15:06
comments: true
categories: 
---
```
Vmware Easy Install

PLEASE WAIT! VMware Tools is currently being 
installed on your system. Depending on the 
version of Ubuntu you are installing, you may 
log in below and use the system during 
intallation. Otherwise, please wait for the 
graphical environment to launch. Thank you.
```
```
sudo mv /etc/issue.backup /etc/issue
sudo mv /etc/rc.local.backup /etc/rc.local
sudo mv /opt/vmware-tools-installer/lightdm.conf /etc/init
```