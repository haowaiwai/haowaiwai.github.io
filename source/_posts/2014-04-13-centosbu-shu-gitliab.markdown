---
layout: post
title: "centos部署gitliab"
date: 2014-04-13 10:34
comments: true
categories: 
---
下载地址：https://www.gitlab.com/downloads/

参考文档：https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md

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

