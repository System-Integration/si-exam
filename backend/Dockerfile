FROM gradle:5.6.4-jdk8 as builder

WORKDIR /app

COPY build.gradle .

COPY gradle.properties .

RUN gradle --refresh-dependencies

COPY . .

RUN gradle fatJar

FROM openjdk:8-jre-alpine

WORKDIR /app

COPY  --from=builder /app/build/libs/backend-all-0.0.1.jar /app/application.jar

CMD ["java", "-server", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-XX:InitialRAMFraction=2", "-XX:MinRAMFraction=2", "-XX:MaxRAMFraction=2", "-XX:+UseG1GC", "-XX:MaxGCPauseMillis=100", "-XX:+UseStringDeduplication", "-jar", "application.jar"]