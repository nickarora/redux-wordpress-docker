#!/bin/bash

source bin/env.sh

dcdev stop backend
dcdev run --rm backend npm install
dcdev up -d backend