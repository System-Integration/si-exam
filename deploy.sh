#!/bin/bash
docker build -t oliverloenning/si-frontend:latest -t oliverloenning/si-frontend:$SHA ./frontend
docker build -t oliverloenning/si-rabbitmq:latest -t oliverloenning/si-rabbitmq:$SHA ./rabbitmq
cd backend && ./gradlew jib && cd ..

docker push oliverloenning/si-frontend:latest
docker push oliverloenning/si-rabbitmq:latest

#Push using the SHA value of the latest commit rather than than LATEST because latest will never change
docker push oliverloenning/si-frontend:$SHA
docker push oliverloenning/si-rabbitmq:$SHA

kubectl apply -f k8s
kubectl set image deployments/frontend-deployment frontend=oliverloenning/si-frontend:$SHA
kubectl set image deployments/mom-deployment mom=oliverloenning/si-rabbitmq:$SHA
kubectl set image deployments/backend-deployment backend=oliverloenning/si-backend:$SHA