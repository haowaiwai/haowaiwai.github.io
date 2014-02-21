---
layout: post
title: "MySQL维护"
date: 2014-02-19 18:22
comments: true
categories: 
---
## 查询分区信息 ##
```
EXPLAIN PARTITIONS SELECT * FROM TABLE;
```
## 查询当前数据库用户连接情况 ##
```
show processlist;
```
## MySQL运行状态 ##
```
show status;
```