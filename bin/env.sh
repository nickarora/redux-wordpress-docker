export DOCKER_CONFIG_DEV=${DOCKER_CONFIG_DEV:-docker-compose.yml}

dcdev() {
  docker-compose -f $DOCKER_CONFIG_DEV "$@"
}