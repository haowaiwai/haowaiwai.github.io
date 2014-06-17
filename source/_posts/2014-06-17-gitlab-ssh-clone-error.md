title: 'gitlab ssh clone error'
date: 2014-06-17 15:42:27
tags:
---
## 详细错误 ##
```
git@192.168.234.135's password: 
Permission denied, please try again.
git@192.168.234.135's password: 
Permission denied, please try again.
git@192.168.234.135's password: 
Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
```
## 原因 ##
### git不用不能登陆 ###
sudo adduser --disabled-login --gecos 'GitLab' git

## 方法 ##
### 添加ssh key ###
