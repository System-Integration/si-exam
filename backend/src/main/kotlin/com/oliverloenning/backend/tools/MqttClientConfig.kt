package com.oliverloenning.backend.tools

import org.eclipse.paho.client.mqttv3.MqttClient
import org.eclipse.paho.client.mqttv3.MqttClientPersistence
import org.eclipse.paho.client.mqttv3.MqttConnectOptions
import org.eclipse.paho.client.mqttv3.MqttMessage
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence
import org.eclipse.paho.client.mqttv3.persist.MqttDefaultFilePersistence
import org.springframework.beans.factory.config.ConfigurableBeanFactory
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Scope


@Configuration
class MqttClientConfig {

    @Bean
    @Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
    fun customMqttClient(): MqttClient {
        val env = System.getenv("MOM_SOCKET_IP") ?: "mom"
        val mqttClient = MqttClient("ws://$env:15675/ws", "Server", MemoryPersistence())

        val options = MqttConnectOptions()
        options.isAutomaticReconnect=true
        options.isCleanSession=true
        options.connectionTimeout=10
        mqttClient.connect(options)

        return mqttClient
    }

}