---
layout: post
title: "CentOS6.5配置"
date: 2014-01-22 23:24
comments: true
categories: 
---
## 添加服务端口 ##
根据策略配置，服务可能只被允许运行在特定的端口号 。试图改变服务运行的端口，在不改变政策，可能导致启动失败的服务。首先查看一下 SELinux 允许 HTTP 侦听 TCP 端口，使用命令：
```
sudo yum -y install policycoreutils-python
#list
sudo semanage port -l | grep -w http_port_t
#add
sudo semanage port -a -t http_port_t -p tcp 8888
```
## Set Apache environment ##
```
gedit /etc/sysconfig/httpd
export LANG='en_US.UTF-8'
export LC_ALL='en_US.UTF-8'
```
## 安装MariaDB ##
Here is your custom MariaDB YUM repository entry for CentOS. Copy and paste it into a file under /etc/yum.repos.d/ (we suggest naming the file MariaDB.repo or something similar). See "Installing MariaDB with yum" for detailed information.
```
# MariaDB 5.5 CentOS repository list - created 2014-01-27 02:21 UTC
# http://mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/5.5/centos6-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```
```
sudo yum install MariaDB-server MariaDB-client
sudo yum install MySQL-python
```

## 临时关闭SELinux ##
```
setenforce 0
```
## 彻底关闭SELinux ##
```
/etc/selinux/config
SELINUX=disabled
```

## 设置服务自启动 ##
```
chkconfig --list
chkconfig mysql on
chkconfig httpd on
```

## 安装pip ##
```
yum install python-setuptools
easy_install pip
pip install Django==1.6.1
pip install --upgrade setuptools
```

## XX 不在 sudoers 文件中。此事将被报告。##
```
visudo
xxxx    ALL=(ALL)       ALL
```