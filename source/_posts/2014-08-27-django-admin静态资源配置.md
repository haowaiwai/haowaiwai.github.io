title: django admin静态资源配置
date: 2014-08-28 00:00:13
tags:
---
## django ##
```
#settings.py
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
#shell
python manage.py collectstatic
```
## nginx ##
```
location  ~/static/  {
	root   /home/haoyy/sourcecode/mysite/ ;
	break;
}
```
