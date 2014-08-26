title: ubuntu配置nginx+django+uwsgi
date: 2014-08-26 22:10:18
tags:
---
```
#安装ngnix
sudo add-apt-repository ppa:nginx/stable
sudo apt-get update
sudo apt-get install nginx
#安装uwsgi
sudo apt-get install build-essential python
sudo apt-get install python-dev
sudo pip install uwsgi
#安装django
sudo pip install django

location / {
	uwsgi_pass 127.0.0.1:8888;
	include uwsgi_params;
}

<uwsgi>
	<socket>127.0.0.1:8888</socket>
	<master>true</master>
	<chdir>/home/haoguangyu/sourcecode/mysite</chdir>
	<module>mysite.wsgi:application</module>
</uwsgi>
```
