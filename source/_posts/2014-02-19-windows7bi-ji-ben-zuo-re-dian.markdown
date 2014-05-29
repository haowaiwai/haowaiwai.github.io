---
layout: post
title: "windows7笔记本做热点"
date: 2014-02-19 00:11
comments: true
categories: 
---
```
netsh wlan set hostednetwork mode=allow ssid=abcde key=87654321
netsh wlan start hostednetwork
netsh wlan stop hostednetwork
netsh wlan show drivers
```