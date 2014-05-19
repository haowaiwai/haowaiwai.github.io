---
layout: post
title: "ubuntu编译安装svn"
date: 2014-04-13 10:29
comments: true
categories: 
---
```
#apr
tar xf apr-1.5.0.tar.gz
cd apr-1.5.0
./configure --prefix=/usr/local/apr
make && make install
#apr util
tar xf apr-util-1.5.3.tar.gz
cd apr-util-1.5.3
./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr
make && make install
#scons
tar zxvf scons-2.3.1.tar.gz
cd scons-2.3.1
sudo python setup.py install
#serf
tar jxvf serf-1.3.5.tar.bz2
cd serf-1.3.5
scons APR=/usr/local/apr  APU=/usr/local/apr-util
sudo scons install
#subversion
tar jxvf subversion-1.8.9.tar.bz2
cd subversion-1.8.9
./configure --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --with-serf=/usr/local/serf
make
sudo make install
```
