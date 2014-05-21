---
layout: post
title: "ubuntu apache2 https搭建"
date: 2014-05-21 13:36
comments: true
categories: 
---
```
sudo apt-get install apache2
sudo apt-get install openssl
sudo a2enmod ssl
sudo ln -s /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-enabled/001-ssl.conf
sudo service apache2 restart
```
