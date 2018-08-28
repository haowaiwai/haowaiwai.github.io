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

curl -X GET "localhost:9200/station/request/_search?pretty=true" -H 'Content-Type: application/json' -d'
{
    "query" : { "wildcard" : { "time" : "2018082515*" }}
}'

curl -X GET "localhost:9200/station/request/_search?pretty=true" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "should": [
        { "match": { "operator":  "station_closed" }},
        { "wildcard": { "time": "2018082711*"  }}
      ],
      "minimum_should_match": 2
    }
  }
}'

curl -X GET "localhost:9200/station/request/_search?pretty=true" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "range": { "time": { "gt": "20180828140000000", "lt": "20180828150000000" } }
    },
    "sort": { "_id": { "order": "desc" }}
}'
```

