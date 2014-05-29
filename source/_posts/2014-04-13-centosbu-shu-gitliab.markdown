---
layout: post
title: "centos部署gitlab"
date: 2014-04-13 10:34
comments: true
categories: 
---
下载地址：https://www.gitlab.com/downloads/

参考文档：https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md
## 安装 ##
```
sudo yum install openssh-server
sudo yum install postfix # sendmail or exim is also OK
sudo rpm -i gitlab-x.y.z_omnibus-x.el6.x86_64.rpm # this is the .rpm you downloaded
sudo gitlab-ctl reconfigure
sudo lokkit -s http -s ssh # open up the firewall for HTTP and SSH requests
```

查看运行状态
```
sudo gitlab-ctl status
```
## 升级 ##
```
# Stop unicorn and sidekiq so we can do database migrations
sudo gitlab-ctl stop unicorn
sudo gitlab-ctl stop sidekiq
# Create a database backup in case the upgrade fails
sudo gitlab-rake gitlab:backup:create
# Install the latest package
sudo rpm -Uvh gitlab-6.8.2_omnibus-1.el6.x86_64.rpm
# Reconfigure GitLab (includes database migrations)
sudo gitlab-ctl reconfigure
# Start unicorn and sidekiq
sudo gitlab-ctl start
```
