Difference between **Service** and **Deployment** ❯

**Deployment** is responsible for keeping a set of pods running.  
**Service** is responsible for enabling network access to a set of pods.


```yaml
apiVersion: v1
kind: Service                       # Service // Job // Deployment
metadata:                           #Metadata is used for others to look up this service with name
  name: backend-cluster-ip-service  #Name is the lookup name
                                    #Label is used for identification within kubernetes
spec:                               #Specfications
  type: ClusterIP                   #What type
  selector:
    component: server               #Specifices what kinda deployment it is
  ports:
    - port: 8080
      targetPort: 8080
```

# Project



Project is made with different services -> Microservices

Pipeline is as follows:
```
Project -> Docker -> Kubernetes -> Google cloud  
        |  
        v  
    Travis CI    
```
We have 1 running cluster: **Multi-cluster**  
- Backend Deployment
- Frontend Deployment
- Database Deployment
- Mom Deployment
- Ingress Deployment (Works as a loadbalancer & proxy)




``Image`` from ``.yaml`` is deployed to ``Cluster-IP Service``



``Ingress service`` is a predefined service and uses a config file in our **k8s** directory

``ClusterIP service`` is production service to create network between different deployments and is responsible for finding the different deployments. Each microservice has its own ClusterIP service  

``x-deployments`` is a
"Image x" are pods that contain a docker image  

![kubernetes](/artifacts/kubernetes.png)

xDeployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: server #We allow communication between all types of "server"
  template:
    metadata:
      labels:
        component: server #this defines how we look up THIS deployment, what type it is, type  being anything and is just a tag
    spec:
      containers:
        - name: backend
          image: oliverloenning/si-backend
          ports:
            - containerPort: 8080
          env:
            - name: DATABASE_USER
              value: "root"
            - name: DATABASE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: sidatabase
                  key: SIDATABASE
            - name: MOM_SOCKET_IP
              value: mom-cluster-ip-service
            - name: DATABASE_HOSTNAME
              value: database-cluster-ip-service
```
