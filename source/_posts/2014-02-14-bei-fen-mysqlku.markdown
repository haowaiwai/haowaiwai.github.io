---
layout: post
title: "备份MySQL库"
date: 2014-02-14 11:03
comments: true
categories: 
---
```
/usr/bin/mysqldump -u <username> -p <password> <database> | gzip > /path/produce_`date +%Y%m%d`.gz
```