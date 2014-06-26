title: ubuntu编译安装git
date: 2014-06-26 11:32:53
tags:
---
摘自https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md
```
# Remove packaged Git
sudo apt-get remove git-core
# Install dependencies
sudo apt-get install -y libcurl4-openssl-dev libexpat1-dev gettext libz-dev libssl-dev build-essential
# Download and compile from source
cd /tmp
curl --progress https://www.kernel.org/pub/software/scm/git/git-2.0.0.tar.gz | tar xz
cd git-2.0.0/
make prefix=/usr/local all
# Install into /usr/local/bin
sudo make prefix=/usr/local install
```
