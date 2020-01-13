kubectl apply -f k8s

# Dev environment
kubectl patch svc database-cluster-ip-service --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
kubectl patch svc database-cluster-ip-service --type='json' -p '[{"op":"replace","path":"/spec/ports","value": [ {"port":3306, "targetPort":3306, "nodePort":31515 } ]}]'
kubectl patch svc mom-cluster-ip-service --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
kubectl patch svc mom-cluster-ip-service --type='json' -p '[{"op":"replace","path":"/spec/ports","value": [ {"name": "production", "port":15675, "targetPort":15675 }, {"name": "development", "port":15672, "targetPort":15672, "nodePort":31520 } ]}]'

kubectl delete deployment frontend-deployment && kubectl delete deployment backend-deployment && kubectl set 

sleep 10

skaffold dev --trigger notify
