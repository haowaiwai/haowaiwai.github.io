title: ubuntu编译安装ruby
date: 2014-06-26 11:38:45
tags:
---
摘自https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md
```
sudo apt-get remove ruby1.8
#Download Ruby and compile it:
mkdir /tmp/ruby && cd /tmp/ruby
curl --progress ftp://ftp.ruby-lang.org/pub/ruby/2.1/ruby-2.1.2.tar.gz | tar xz
cd ruby-2.1.2
./configure --disable-install-rdoc
make
sudo make install
#Install the Bundler Gem:
sudo gem install bundler --no-ri --no-rdoc
```
