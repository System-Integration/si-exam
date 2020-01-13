# 🎉System integration Exam Project 🎉
Final product for si-exam

### Authors 📘
Mathias Igel  
Mathias Jensenius  
Oliver Lønning  
Mohammed Umar Ulhaq

## 1️⃣Business Scenario 📈
We are making a computer💻 store.

## 2️⃣Architecture 🔧
We have many different parts of the system:
- Nginx(Proxy)
- Mom(RabbitMQ Message Broker)
- Frontend(ReactJS + Redux + TypeScript)
- Backend(Kotlin + JPA + Spring Boot)
- Database(MySQL)

##  3️⃣ Integration patterns
We are using the following patterns:
- Message
- Message Channel
- Point-To-Point Channel
- Event-Driven Consumer
- Message Endpoint

## 4️⃣Illustrations

### System

![system](/artifacts/system.png)

### Kubernetes

![kubernetes](/artifacts/kubernetes.png)

## Requisite

[Have Docker🐳 installed](https://www.docker.com)

[Have Kubernetes installed](https://kubernetes.io)

[Ingress installed for kubernetes](https://kubernetes.github.io/ingress-nginx/deploy/#prerequisite-generic-deployment-command)

(Install ingress for docker desktop)  
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml` 
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml`

`kubectl create secret generic sidatabase --from-literal SIDATABASE=mysupersecretpassword` to create a encrypted database password for database

[(Preferred) Have Skaffold installed](https://github.com/GoogleContainerTools/skaffold)


## Docker-Compose (UNSTABLE_LEGACY)

1. `git clone {project}`
2. `docker-compose up`

## Kubernetes Skaffold (PREFERRED)

1. `./dev.sh`
