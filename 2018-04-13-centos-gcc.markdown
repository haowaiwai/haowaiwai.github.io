---
layout: default
title:  "centos gcc"
date:   2018-04-15 08:57:32 +0800
categories: centos gcc
---
```
sudo yum install centos-release-scl
sudo yum install devtoolset-7-gcc*
scl enable devtoolset-7 bash
which gcc
gcc --version
```
