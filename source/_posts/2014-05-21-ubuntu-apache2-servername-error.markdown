---
layout: post
title: "ubuntu apache2 servername error"
date: 2014-05-21 14:03
comments: true
categories: 
---
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1. Set the 'ServerName' directive globally to suppress this message
```
sudo vi /etc/apache2/conf-available/servername.conf
ServerName localhost
```
or
```
echo "ServerName localhost" | sudo tee /etc/apache2/conf-available/servername.conf
```
enable servername
```
sudo a2enconf servername
```

