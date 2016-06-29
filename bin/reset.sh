#!/bin/bash

echo "Deleting all containers"
docker ps -a -q | xargs docker stop
docker ps -a -q | xargs docker rm

echo "Deleting all images"
docker images -q | xargs docker rmi

echo "Done."