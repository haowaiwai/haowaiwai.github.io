title: ubuntu安装HTTPie
date: 2014-08-16 22:00:29
tags:
---
code:https://github.com/jakubroztocil/httpie
## install ##
```
pip install --upgrade httpie
```

## cmd ##
```
#Basic auth
http -a username:password example.org
#Post data
http POST http://192.168.9.163:9090/soap < 1.xml
```
