title: CentOS7
date: 2014-09-17 01:24:13
---
```
#恢复
sudo gitlab-rake gitlab:backup:restore

##备份
sudo gitlab-rake gitlab:backup:create

To set the current date, type:
# timedatectl set-time YYYY-MM-DD

To set the current time, type:
# timedatectl set-time HH:MM:SS

To get the list of time zones, type:
# timedatectl list-timezones

To change the time zone to Asia/Shanghai, type:
timedatectl set-timezone Asia/Shanghai

#升级过程中得错误，暂时不知道怎么回事，影响什么？
psql:/var/opt/gitlab/backups/db/database.sql:22: ERROR:  must be owner of extension plpgsql

#
ip addr add 192.168.1.104/24 dev eno16777736
ip addr del 192.168.1.104/24 dev eno16777736

#
ip addr del 192.168.10.100/24 dev eno16777736
ip addr add 192.168.9.251/24 dev eno16777736
ip link set dev eno16777736 down
ip link set dev eno16777736 up
```
