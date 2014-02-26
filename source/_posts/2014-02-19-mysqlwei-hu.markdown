---
layout: post
title: "MySQL维护"
date: 2014-02-19 18:22
comments: true
categories: 
---
## 查询分区信息 ##
```
explain partitions select * from 表名;
show create table 表名;
select partition_name part,partition_expression expr,partition_description descr,table_rows from information_schema.partitions where table_schema = schema() and table_name='表名';
alter table 表名 partition by hash ( year(time) ) partitions 分区数;
```
## 查询当前数据库用户连接情况 ##
```
show processlist;
```
## MySQL运行状态 ##
```
show status;
```