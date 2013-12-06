---
layout: post
title: "SSH免密码"
date: 2013-12-06 12:11
comments: true
categories: 
---
## SSH免密码 ##
	ssh-keygen -t dsa
	ssh root@192.168.0.58
	mkdir -p .ssh
	exit
	scp /root/.ssh/id_dsa.pub root@192.168.0.58:/root/.ssh
	ssh root@192.168.10.58
	cd .ssh
	cat id_dsa.pub >authorized_keys
	exit