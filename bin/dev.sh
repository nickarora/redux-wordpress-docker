#!/bin/bash

source bin/env.sh

echo "building"
dcdev build

echo "installing backend deps"
dcdev run --rm backend npm install

echo "starting"
dcdev up -d