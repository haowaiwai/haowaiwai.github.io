---
layout: post
title: "恢复octopress"
date: 2014-05-20 17:59
comments: true
categories: 
---
```
git clone -b source https://github.com/haowaiwai/haowaiwai.github.io.git octopress
cd octopress
rake setup_github_pages
git clone -b master https://github.com/haowaiwai/haowaiwai.github.io.git _deploy
```

重装的系统安装
```
gem install bundler
rbenv rehash    # If you use rbenv, rehash to be able to run the bundle command
bundle install
```
