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
- Aggretation
- Dynamic Router
- Message Broker
- Event-Driven Consumer
- Message Channel

## 4️⃣Illustrations

### System

![system](/artifacts/system.png)

### Kubernetes

![kubernetes](/artifacts/kubernetes.png)

## Requisite

[Have Docker🐳 installed](https://www.docker.com)

[Have Kubernetes installed](https://kubernetes.io)

[(Preferred) Have Skaffold installed](https://github.com/GoogleContainerTools/skaffold)


## Docker-Compose (UNSTABLE_LEGACY)

1. `sh git clone {project}`
2. `sh docker-compose up`

## Kubernetes Skaffold (PREFERRED)

1. `sh kubectl create secret generic sidatabase --from-literal SIDATABASE=mysupersecretpassword to create a encrypted database password
2. `sh kubectl apply -f k8s` to apply kubernetes objects
3. `sh kubectl delete deployment frontend-deployment && kubectl delete deployment backend-deployment` to delete production objects so we can run as development
4. `sh skaffold dev --trigger notify` to run our frontend and backend in development
