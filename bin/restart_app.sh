#!/bin/bash

source bin/env.sh

dcdev stop app
dcdev run --rm app npm install
dcdev up -d app