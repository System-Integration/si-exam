# 🎉System integration Mini Project 2 🎉
This project is about making integration patterns

### Authors 📘
Mathias Igel  
Mathias Jensenius  
Oliver Lønning  
Mohammed Umar Ulhaq

## 1️⃣Business Scenario 📈
We are making a computer💻 store. With this a customer will be able to select a computer💻 and purchase it 💲

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

![system](/artifacts/system.png)


## How to make this project work

Have Docker🐳 installed and gradle installed on your development machine

1. `sh git clone {project}`
2. `sh docker-compose up`

## Editing the server

- 1. `sh cd backend && gradle build -t` . Let it run while you develop on the server
