---
layout: post
title: "No module named wsgi"
date: 2014-02-19 15:48
comments: true
categories: 
---
## CentOS django ImportError: No module named wsgi ##
### 错误日志 ###
```
[Wed Jan 22 18:43:47 2014] [notice] SELinux policy enabled; httpd running as context unconfined_u:system_r:httpd_t:s0
[Wed Jan 22 18:43:47 2014] [notice] suEXEC mechanism enabled (wrapper: /usr/sbin/suexec)
[Wed Jan 22 18:43:47 2014] [notice] Digest: generating secret for digest authentication ...
[Wed Jan 22 18:43:47 2014] [notice] Digest: done
[Wed Jan 22 18:43:47 2014] [notice] Apache/2.2.15 (Unix) DAV/2 mod_wsgi/3.2 Python/2.6.6 configured -- resuming normal operations
[Wed Jan 22 18:43:51 2014] [error] [client 192.168.18.113] mod_wsgi (pid=4709): Target WSGI script '/var/www/produce/produce/wsgi.py' cannot be loaded as Python module.
[Wed Jan 22 18:43:51 2014] [error] [client 192.168.18.113] mod_wsgi (pid=4709): Exception occurred processing WSGI script '/var/www/produce/produce/wsgi.py'.
[Wed Jan 22 18:43:51 2014] [error] [client 192.168.18.113] Traceback (most recent call last):
[Wed Jan 22 18:43:51 2014] [error] [client 192.168.18.113]   File "/var/www/produce/produce/wsgi.py", line 14, in 
[Wed Jan 22 18:43:51 2014] [error] [client 192.168.18.113]     from django.core.wsgi import get_wsgi_application
[Wed Jan 22 18:43:51 2014] [error] [client 192.168.18.113] ImportError: No module named wsgi
```
### 解决方法 ###
```
chcon -v --type=httpd_sys_content_t /var/www/produce/produce/wsgi.py
```