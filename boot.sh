#!/bin/bash

# Envvars

SERVER=/vagrant/server/server.js

# Install base packages

sudo apt-get update
sudo apt-get install curl

# Install node.js

curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs

# Install Mongo

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo "deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen" | tee -a /etc/apt/sources.list.d/10gen.list
sudo apt-get -y update
sudo apt-get -y install mongodb-10gen

# Boot up services

sudo service mongodb start
node $SERVER
