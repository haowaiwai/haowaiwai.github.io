title: syntax error word unexpected (expecting ) )
date: 2014-09-03 20:53:21
tags:
---
```
Wrong:

target:
    ifeq (foo, bar)
        ...
    endif
Correct:

target:
ifeq (foo, bar)
    ...
endif
```
the conditional statements should be written without indention
摘自：http://stackoverflow.com/questions/4483313/make-error-for-ifeq-syntax-error-near-unexpected-token
