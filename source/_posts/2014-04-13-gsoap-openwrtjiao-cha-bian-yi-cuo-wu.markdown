---
layout: post
title: "gsoap openwrt交叉编译错误"
date: 2014-04-13 10:27
comments: true
categories: 
---
stdsoap2.c:(.text+0x1b04c): undefined reference to `isnan'的错误。

stdsoap.h
```
#  define soap_isnan(n) isnan(0) 
```
修改为 
```
#  define soap_isnan(n) (0)
```

