#!/bin/bash

if [ "$DOCKER_HUB_PUSH" == "master" ]; then
  docker build -t oliverloenning/si-frontend ./frontend
  docker build -t oliverloenning/si-backend ./backend
  docker push oliverloenning/si-frontend
  docker push oliverloenning/si-backend
fi