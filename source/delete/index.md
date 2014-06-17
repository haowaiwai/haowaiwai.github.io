title: delete
date: 2014-06-17 16:35:05
---
```
sudo apt-get install vlan
sudo vconfig add eth0 4082
sudo ip address add 10.10.10.3/24 dev eth0.4082
sudo ip link set dev eth0.4082 up

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
