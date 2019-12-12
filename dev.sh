kubectl apply -f k8s

kubectl delete deployment frontend-deployment && kubectl delete deployment backend-deployment

sleep 10

skaffold dev --trigger notify
