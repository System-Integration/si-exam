import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.1.10.RELEASE"
	id("io.spring.dependency-management") version "1.0.8.RELEASE"
	kotlin("jvm") version "1.2.71"
	kotlin("plugin.spring") version "1.2.71"
	kotlin("plugin.jpa") version "1.2.71"
}

group = "com.oliverloenning"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

val developmentOnly by configurations.creating
configurations {
	runtimeClasspath {
		extendsFrom(developmentOnly)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	/*
	implementation("org.springframework.boot:spring-boot-starter-amqp")
	implementation("org.springframework.integration:spring-integration-mqtt:5.2.0.RELEASE")
	*/
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	implementation(group = "com.google.code.gson", name = "gson", version = "2.7")
	// https://mvnrepository.com/artifact/org.eclipse.paho/org.eclipse.paho.client.mqttv3
	implementation(group = "org.eclipse.paho", name = "org.eclipse.paho.client.mqttv3", version = "1.2.2")

	runtimeOnly("mysql:mysql-connector-java")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	/*
	testImplementation("org.springframework.amqp:spring-rabbit-test")
*/
}


tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}