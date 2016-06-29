#!/bin/bash

curl -L "https://github.com/wp-cli/wp-cli/releases/download/v0.23.1/wp-cli-0.23.1.phar" > /usr/bin/wp && \
    chmod +x /usr/bin/wp