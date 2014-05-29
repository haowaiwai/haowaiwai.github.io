---
layout: post
title: "pacman代理"
date: 2014-05-14 17:11
comments: true
categories: 
---
摘自官网：https://wiki.archlinux.org/index.php/Sudo#Environment_variables_.28Outdated.3F.29

Environment variables
If you have a lot of environment variables, or you export your proxy settings via export http_proxy="...", when using sudo these variables do not get passed to the root account unless you run sudo with the -E option.
```
$ sudo -E pacman -Syu
```
The recommended way of preserving environment variables is to append them to env_keep:
```
/etc/sudoers
Defaults env_keep += "ftp_proxy http_proxy https_proxy no_proxy"
```
