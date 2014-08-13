title: linux patch example
date: 2014-08-13 22:12:01
tags:
---
## cat old.c ##
```
#include <stdio.h>

int main(int argc, char* argv[]) {
}

```
## cat new.c ##
```
#include <stdio.h>

int main(int argc, char* argv[]) {
	printf("hello");
}

```
## diff -Naur old.c new.c > 001.patch ##
## cat 001.patch ##
```
--- old.c	2014-08-13 14:07:09.996664864 +0800
+++ new.c	2014-08-13 14:06:51.932665236 +0800
@@ -1,5 +1,6 @@
 #include <stdio.h>
 
 int main(int argc, char* argv[]) {
+	printf("hello");
 }
 
```
## patch -p0 < 001.patch ##
