#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  docker build -t oliverloenning/si-frontend ./frontend
  docker build -t oliverloenning/si-backend ./backend
  docker build -t oliverloenning/si-nginx ./nginx
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  docker push oliverloenning/si-frontend
  docker push oliverloenning/si-backend
  docker push oliverloenning/si-nginx
fi