#!/bin/bash

echo "==> Installing wordpress CLI"
wp_cli_install.sh

echo "==> Installing wordpress"
/entrypoint.sh apache2-wp

echo "==> Configuring wordpress"
wp_config.sh

exec apache2-foreground