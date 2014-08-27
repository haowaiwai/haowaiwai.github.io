title: ubuntu安装mariadb
date: 2014-08-28 00:04:36
tags:
---
```
sudo apt-get install python-software-properties
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
sudo add-apt-repository 'deb http://mirrors.neusoft.edu.cn/mariadb/repo/10.0/ubuntu precise main'
sudo apt-get update
sudo apt-get install mariadb-server
```
