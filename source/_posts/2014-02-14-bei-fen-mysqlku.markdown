---
layout: post
title: "备份MySQL库"
date: 2014-02-14 11:03
comments: true
categories: 
---
'''
/usr/bin/mysqldump -u <username> -p<password> <redmine_database> | gzip > /path/to/backup/db/redmine_`date +%y_%m_%d`.gz
'''