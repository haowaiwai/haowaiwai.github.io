---
layout: post
title: "Octopress和zsh不兼容[转]"
date: 2014-04-12 21:40
comments: true
categories: 
---
引用：http://fancyoung.com/blog/use-octopress-new-post-function-with-zsh/

执行：$ rake new_post["arch-linux-reinstall-glibc.markdown"]

报错：zsh: no matches found: new_post[arch-linux-reinstall-glibc]

原因：zsh中若出现‘*’, ‘(’, ‘|’, ‘<’, ‘[’, or ‘?’符号，则将其识别为查找文件名的通配符

快速解决：用引号括起来$ rake "new_post[arch-linux-reinstall-glibc.markdown]"

彻底解决：取消zsh的通配(GLOB), 在.zshrc中加入alias rake="noglob rake"

PS：在git回滚操作git reset --soft HEAD^时出现报错： zsh: no matches found HEAD^，

也为同样原因，因为^也为正则中的符号， 需要转义为git reset --soft HEAD\^。

官方：https://github.com/imathis/octopress/issues/117
