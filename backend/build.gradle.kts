import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.jetbrains.kotlin.*
import cz.habarta.typescript.generator.JsonLibrary
import cz.habarta.typescript.generator.TypeScriptFileType
import cz.habarta.typescript.generator.TypeScriptOutputKind
import org.jetbrains.kotlin.util.collectionUtils.concat

buildscript {
	repositories {
		mavenCentral()
		jcenter()
	}
	dependencies {
		classpath("cz.habarta.typescript-generator", "typescript-generator-gradle-plugin", "2.18.565")
	}
}

plugins {
	id("org.springframework.boot") version "2.1.10.RELEASE"
	id("io.spring.dependency-management") version "1.0.8.RELEASE"
	id("com.google.cloud.tools.jib") version "1.8.0"
	id("cz.habarta.typescript-generator") version "2.17.558"
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

// jib conf
jib.to.image="oliverloenning/si-backend"
jib.to.tags=if(System.getenv("SHA").isNullOrEmpty()) mutableSetOf("latest") else mutableSetOf("latest", System.getenv("SHA"))

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	implementation(group = "com.google.code.gson", name = "gson", version = "2.7")
	implementation(group = "org.eclipse.paho", name = "org.eclipse.paho.client.mqttv3", version = "1.2.2")
	runtimeOnly("mysql:mysql-connector-java")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}


tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

tasks {
	generateTypeScript {
		jsonLibrary = JsonLibrary.jackson2
		val module = "com.oliverloenning.backend"
		val daos = File("${System.getProperty("user.dir")}/src/main/kotlin/com/oliverloenning/backend/daos").walk().map {
			"$module.daos.${it.absolutePath.split("/").last().dropLast(3)}"
		}.filterIndexed { index, _ -> index != 0 }.toMutableList()
		val dtos = File("${System.getProperty("user.dir")}/src/main/kotlin/com/oliverloenning/backend/dtos").walk().map {
			"$module.dtos.${it.absolutePath.split("/").last().dropLast(3)}"
		}.filterIndexed { index, _ -> index != 0 }.toMutableList()
		classes = daos + dtos
		outputFileType = TypeScriptFileType.implementationFile
		outputFile = "../frontend/src/global-types.ts"
		outputKind = TypeScriptOutputKind.module

	}
}