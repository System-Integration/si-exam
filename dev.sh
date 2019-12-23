kubectl apply -f k8s

# Dev environment
kubectl patch svc database-cluster-ip-service --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
kubectl patch svc database-cluster-ip-service --type='json' -p '[{"op":"replace","path":"/spec/ports","value": [ {"port":3306, "targetPort":3306, "nodePort":31515 } ]}]'

kubectl delete deployment frontend-deployment && kubectl delete deployment backend-deployment && kubectl set 

sleep 10

skaffold dev --trigger notify
