#!/bin/bash

source bin/env.sh
dcdev stop app
dcdev run --rm app npm rebuild node-sass
dcdev up -d app