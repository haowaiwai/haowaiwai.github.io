title: JAVA和TOMCAT环境变量
date: 2014-09-28 11:03:11
tags:java
---
## window平台 ##
### JAVA环境变量 ###
1，新建JAVA_HOME=C:\Program Files\Java\jdk1.8.0
2，添加PATH：;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
3，新建CLASSPATH=.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
### TOMCAT环境变量 ###
1，新建CATALINA_BASE=C:\tomcat
2，新建CATALINA_HOME=C:\tomcat
## linux平台 ##
```
#编辑增加
vi /etc/profile
export JAVA_HOME=/usr/java/jdk1.6.0_23
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH
export CLASSPATH=.:/usr/java/jdk1.6.0_23/lib:/usr/java/jdk1.6.0_23/jre/lib:$CLASSPATH
export CATALINA_BASE=/usr/local/apache-tomcat-6.0.29 
export CATALINA_HOME=/usr/local/apache-tomcat-6.0.29
#生效
source /etc/profile
```
