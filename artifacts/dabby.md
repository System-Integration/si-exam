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
apiVersion: apps/v1 #Where this type of objective is in the kubernetes enviroment
kind: Deployment #What type of object, predefined. responsible for keeping pods alive and replicating them
metadata:
  name: backend-deployment #This is the name for the display interface
spec:
  replicas: 1 #Amount of pods
  selector:
    matchLabels:
      component: server #We allow communication between all types of "server"
  template:
    metadata:
      labels:
        component: server #this defines how we look up THIS deployment, what type it is, type  being anything and is just a tag
    spec:
      containers: #A single pod can contain multiple images, best practice is keeping a single image per pod. This is also an array
        - name: backend #Creates a pod with specified name +sha_value
          image: oliverloenning/si-backend #which image to use, found on dockerhub
          ports:
            - containerPort: 8080 #exposes port to kubernetes
          env: #Enviroment varaibles so it can connect to our database
            - name: DATABASE_USER
              value: "root"
            - name: DATABASE_PASSWORD
              valueFrom: #secret database with key. Stored within kubernetes cluster
                secretKeyRef:
                  name: sidatabase
                  key: SIDATABASE
            - name: MOM_SOCKET_IP #Get IP for mom service
              value: mom-cluster-ip-service
            - name: DATABASE_HOSTNAME
              value: database-cluster-ip-service
```

ClusteIP service
```yaml
apiVersion: v1
kind: Service #responsible for network access to pods
metadata:
  name: backend-cluster-ip-service
spec:
  type: ClusterIP #predefined
  selector:
    component: server #Enable access to service / deployments with this tag
  ports:
    - port: 8080 #which ports to expose
      targetPort: 8080
```

Ingress service
```yaml
apiVersion: extensions/v1beta1
kind: Ingress #Special type for ingress service
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: nginx #We select nginx
    nginx.ingress.kubernetes.io/rewrite-target: /$1 
    nginx.org/websocket-services: "mom-cluster-ip-service"
spec:
  rules:
    - http:
        paths:
          - path: /?(.*) #if path is blank, send to frontend
            backend: #Is a property, does not actually use backend
              serviceName: frontend-cluster-ip-service
              servicePort: 3000
          - path: /api/?(.*)
            backend:
              serviceName: backend-cluster-ip-service
              servicePort: 8080
          - path: /mom-socket/?(.*)
            backend:
              serviceName: mom-cluster-ip-service
              servicePort: 15675
```
