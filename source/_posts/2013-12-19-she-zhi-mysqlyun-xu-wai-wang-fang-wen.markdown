---
layout: post
title: "设置MySQL允许外网访问"
date: 2013-12-19 20:01
comments: true
categories: 
---

## 1.修改配置文件 ##
```
sudo vim /etc/mysql/my.cnf
```
把bind-address参数的值改成你的内/外网IP或0.0.0.0,或者直接注释掉这行.

## 2.登录数据库 ##
```
mysql -u root -p
```
输入密码
```
mysql> use mysql;
```
## 3.查询host ##
```
mysql> select user,host from user;
```
## 4.创建host ##
如果没有"%"这个host值,就执行下面这两句:
```
mysql> update user set host='%' where user='root';
mysql> flush privileges;
```
## 5.授权用户 ##
任意主机以用户root和密码mypwd连接到mysql服务器
```
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'mypwd' WITH GRANT OPTION;
mysql> flush privileges;
```
IP为192.168.1.102的主机以用户myuser和密码mypwd连接到mysql服务器
```
mysql> GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'192.168.1.102' IDENTIFIED BY 'mypwd' WITH GRANT OPTION;
mysql> flush privileges;
```