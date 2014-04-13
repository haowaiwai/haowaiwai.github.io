---
layout: post
title: "ubuntu编译安装svn"
date: 2014-04-13 10:29
comments: true
categories: 
---
```
tar xf apr-1.5.0.tar.gz
cd apr-1.5.0
./configure --prefix=/usr/local/apr
make && make install
tar xf apr-util-1.5.3.tar.gz
cd apr-util-1.5.3
./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr
make && make install
```
