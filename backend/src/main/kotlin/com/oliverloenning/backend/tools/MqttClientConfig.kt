package com.oliverloenning.backend.tools

import org.eclipse.paho.client.mqttv3.MqttClient
import org.eclipse.paho.client.mqttv3.MqttConnectOptions
import org.eclipse.paho.client.mqttv3.MqttMessage
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class MqttClientConfig(private val context: ApplicationContext) {

    @Bean
    fun customMqttClient(): MqttClient {
        val mqttClient = MqttClient("ws://mom:15675/ws", "asdasdasd")

        val options = MqttConnectOptions()
        options.isAutomaticReconnect=true
        options.isCleanSession=true
        options.connectionTimeout=10

        mqttClient.connect(options)

        return mqttClient
    }

    fun publish(topic: String, payload: String, qos: Int, retained: Boolean) {
        val message = MqttMessage()
        message.payload = payload.toByteArray()
        message.qos = qos
        message.isRetained = retained

        val customMqttClient = context.getBean("customMqttClient", MqttClient::class.java)

        customMqttClient.publish(topic, message)

        customMqttClient.disconnect()
    }


    fun subscribe(topic: String) {

        val customMqttClient = context.getBean("customMqttClient", MqttClient::class.java)

        customMqttClient.subscribeWithResponse(topic) {topic, message ->
            run {
                println(message.payload)
            }
        }

    }
}
