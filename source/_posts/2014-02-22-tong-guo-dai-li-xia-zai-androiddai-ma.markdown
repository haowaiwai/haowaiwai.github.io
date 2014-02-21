---
layout: post
title: "通过代理下载android代码"
date: 2014-02-22 00:34
comments: true
categories: 
---
```
#!/bin/bash
cd WORKING_DIRECTORY
export http_proxy="127.0.0.1:8087"
export https_proxy="127.0.0.1:8087"
echo "======start repo sync======"
~/bin/repo sync
while [ $? == 1 ]; do
echo "======sync failed, re-sync again======"
sleep 3
~/bin/repo sync
done
```