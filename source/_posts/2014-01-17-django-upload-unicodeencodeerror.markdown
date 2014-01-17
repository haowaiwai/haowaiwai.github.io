---
layout: post
title: "django upload UnicodeEncodeError"
date: 2014-01-17 14:06
comments: true
categories: 
---
[摘自django官方文档](https://code.djangoproject.com/wiki/django_apache_and_mod_wsgi)

If you're taking advantage of the great Internationalization features of Django you may come across a curious problem. Namely, uploading of non-ascii filenames with the Django storage system with the default apache settings on most systems will trigger UnicodeEncodeError exceptions when calling functions like os.path(). To avoid these issues, ensure that the following lines are included in your apache envvars file (typically found in /etc/apache2/envvars).

```
export LANG='en_US.UTF-8'
export LC_ALL='en_US.UTF-8'
```

This error likely wont rear its head during development on the test server as, when run from the command line, the ./manage.py script inherits the users language and locale settings.