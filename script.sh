#!/bin/bash

echo ("Updating the system")

apt-get update
apt-get upgrade -y

echo ("Installing Apache2 and unzip")

apt-get install apache2 unzip -y

echo ("Downloading Web Files")

curl https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip -o /tmp/linux-site-dio-main.zip

echo ("Unziping Web Files")

unzip /tmp/linux-site-dio-main.zip -d /var/www/html/

echo ("Moving Web Files")

mv /var/www/html/linux-site-dio-main/* /var/www/html/

echo ("Removing Unnecessary Folder")

rm -rf /var/www/html/linux-site-dio-main/

echo ("Script Finished!")
