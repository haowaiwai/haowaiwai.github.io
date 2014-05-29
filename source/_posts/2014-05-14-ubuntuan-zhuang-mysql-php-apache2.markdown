---
layout: post
title: "ubuntu安装mysql php apache2"
date: 2014-05-14 15:57
comments: true
categories: 
---
```
sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
sudo add-apt-repository 'deb http://mirrors.scie.in/mariadb/repo/10.0/ubuntu trusty main'
sudo apt-get update
sudo apt-get install mariadb-server
```
```
sudo apt-get install apache2 libapache2-mod-php5
sudo apt-get install php5 php5-mysql
```
