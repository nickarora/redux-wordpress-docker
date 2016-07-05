#!/bin/bash

if ! $(wp core is-installed  --allow-root --path='/var/www/html'); then
   echo "=> Configuring WordPress ..."

   echo "=> Installing wordpress"
   wp core install --path='/var/www/html' --url="$WORDPRESS_URL" --title="$WORDPRESS_TITLE" --admin_user="$WORDPRESS_ADMIN_USER" --admin_password="$WORDPRESS_ADMIN_PASSWORD" --admin_email="$WORDPRESS_ADMIN_EMAIL" --allow-root

   echo "=> Installing wordpress plugins"
   wp plugin install application-passwords --activate --allow-root
   wp plugin install rest-api --activate --allow-root

   echo "=> Enabling Pretty Permalinks"
   wp option update permalink_structure '/%postname%' --allow-root
else
   echo "=> Wordpress is alread configured.";
fi