---
layout: default
title:  "elasticsearch"
date:   2018-08-25 08:57:32 +0800
categories: elasticsearch
---
```
yum install java-1.8.0-openjdk
java -version
rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
vi /etc/yum.repos.d/elasticsearch.repo
[elasticsearch-6.x]
name=Elasticsearch repository for 6.x packages
baseurl=https://artifacts.elastic.co/packages/6.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
yum install elasticsearch

curl 'http://localhost:9200/station/request/20180825090521'
curl 'localhost:9200/station/request/_search?pretty=true'

curl -X GET "localhost:9200/station/request/_search?pretty=true" -H 'Content-Type: application/json' -d'
{
    "query" : { "match" : { "request.stationid" : "012345678912" }}
}'
```

