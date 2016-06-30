#!/bin/bash

source bin/env.sh

echo "building"
dcdev build

echo "installing node application deps"
dcdev run --rm app npm install

echo "starting up containers"
dcdev up -d