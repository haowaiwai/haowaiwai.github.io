title: json-c example
date: 2014-08-15 03:31:34
tags:
---
## pkg-config --libs json ##
```
-L/usr/local/lib -ljson-c
```

## pkg-config --cflags json ##
```
-I/usr/local/include/json-c
```

## compile ##
```
gcc old.c -I/usr/local/include/json-c -L/usr/local/lib -ljson-c
```
