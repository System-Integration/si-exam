FROM gradle:5.6.4-jdk8 as builder

WORKDIR /app

COPY . .

RUN gradle build

FROM openjdk:8-jdk-alpine

WORKDIR /app

COPY --from=builder /app/build/libs/backend-0.0.1-SNAPSHOT.jar ./application.jar

CMD ["java", "-jar", "application.jar"]