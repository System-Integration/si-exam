package com.oliverloenning.backend.tools

import org.eclipse.paho.client.mqttv3.MqttClient
import org.eclipse.paho.client.mqttv3.MqttMessage
import org.springframework.context.ApplicationContext

val publish: (ApplicationContext, String) -> Unit = {context: ApplicationContext, payload: String ->
    run {
        val message = MqttMessage()
        message.payload = payload.toByteArray()
        message.qos = 0
        message.isRetained = false

        val customMqttClient = context.getBean("customMqttClient", MqttClient::class.java)

        customMqttClient.publish("history", message)
    }
}