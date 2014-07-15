title: 常用
date: 2014-06-17 16:35:05
---
```
#设置缺省路由
route add default gw 10.0.0.254
route add -net 0.0.0.0 netmask 0.0.0.0 gw 10.0.0.254
#创建VLAN
sudo apt-get install vlan
sudo vconfig add eth0 4082
sudo ip address add 10.10.10.3/24 dev eth0.4082
sudo ip link set dev eth0.4082 up
#创建桥
brctl addbr br0
brctl addif br0 eth0
ifconfig br0 192.168.1.1 up
brctl delif ena eth0
#将所有的 chain 的计数与流量统计都归零
iptables -t nat -Z
#列出更多的资讯，包括通过该规则的封包总位元数、相关的网路介面等
iptables -t nat -nvL
#生成SSH公钥
ssh-keygen -t rsa -C "haoyy@mail.com"
cat ~/.ssh/id_rsa.pub
#复制文件内容到web ssh key
ssh -T git@github.com
#svn修改文件属性
svn propset svn:executable on *
#git修改文件属性
git update-index --chmod=+x build
#ip route
ip route show
ip route list table table_number
ip rule add fwmark 10 table 10
ip route add table 10 default via 192.168.1.1
ip route add table 10 192.168.0.0/24 192.168.1.2
ip route flush cache
#切换Lightdm和gdm
sudo dpkg-reconfigure gdm
```

以下内容未整理

```
iptables -A INPUT -p tcp --dport 80 -m connlimit ! --connlimit-above 10 -j ACCEPT

iptables -P INPUT DROP
iptables -A INPUT -p tcp -m connlimit ! --connlimit-above 1 --connlimit-mask 24 -j ACCEPT

iptables -P INPUT ACCEPT
iptables -A INPUT -p tcp -m connlimit --connlimit-above 1 --connlimit-mask 24 -j DROP

iptables -A INPUT ACCEPT
iptables -A INPUT -s 192.186.1.0/24 -p tcp --syn -m connlimit --connlimit-above 1 -j DROP --reject-with tcp-reset
iptables -A INPUT -s 192.186.1.0/24 -p tcp -m state --state ESTABLISHED,RELATED -j ACCEPT

iptables -A INPUT -p tcp --syn -m connlimit --connlimit-above 2 -j REJECT

iptables -P INPUT DROP
iptables -A INPUT -p tcp -m connlimit ! --connlimit-above 1 -j ACCEPT

iptables -P INPUT DROP
iptables -A INPUT -s 192.186.1.0/24 -p tcp --syn -m connlimit --connlimit-above 1 -j DROP
iptables -A INPUT -s 192.186.1.0/24 -p tcp -m state --state ESTABLISHED,RELATED -j ACCEPT
#端口转发
iptables -t nat -A PREROUTING -s  -p tcp --dport 80 -j DNAT --to :7777
iptables -t nat -A PREROUTING -s 192.168.0.200/32 -p tcp --dport 80 -j REDIRECT 3128
```
