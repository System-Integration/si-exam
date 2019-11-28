#!/bin/bash

if [ "$DOCKER_HUB_PUSH" == "master" ]; then
  docker build -t oliverloenning/si-frontend ./frontend
  docker build -t oliverloenning/si-legacy-backend ./backend
  docker build -t oliverloenning/si-rabbitmq ./rabbitmq
  ./backend/gradlew jib --image=oliverloenning/si-backend
  docker push oliverloenning/si-frontend
  docker push oliverloenning/si-backend
  docker push oliverloenning/si-rabbitmq
fi