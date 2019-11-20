package com.oliverloenning.backend.tools

import com.google.gson.Gson
import com.oliverloenning.backend.daos.Order
import com.oliverloenning.backend.dtos.AggregatorMessage
import com.oliverloenning.backend.facades.OrderFacade
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.integration.annotation.ServiceActivator
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter
import org.springframework.integration.core.MessageProducer
import org.springframework.integration.channel.DirectChannel
import org.springframework.messaging.MessageChannel
import org.springframework.messaging.MessageHandler
import org.eclipse.paho.client.mqttv3.MqttClient
import org.eclipse.paho.client.mqttv3.IMqttClient
import org.eclipse.paho.client.mqttv3.MqttMessage
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory






@Configuration
class MqttInChannel (private val orderFacade: OrderFacade, private val context: ApplicationContext) {

    @Bean
    fun mqttInputChannel(): MessageChannel {
        return DirectChannel()
    }

    @Bean
    fun inbound(): MessageProducer {
        val adapter = MqttPahoMessageDrivenChannelAdapter("ws://mom:15675/ws", "Server", "aggregator", "splitter", "contentFilter")
        adapter.setCompletionTimeout(5000)
        adapter.setConverter(DefaultPahoMessageConverter())
        adapter.setQos(0)
        adapter.outputChannel = mqttInputChannel()
        return adapter
    }

    // Dynamic Router
    @Bean
    @ServiceActivator(inputChannel = "mqttInputChannel")
    fun handler(): MessageHandler {
        return MessageHandler {
            when (it.headers["mqtt_receivedTopic"]) {
                "aggregator" -> {

                    val gson = Gson()
                    val aggregatorMessage = gson.fromJson(it.payload as String, AggregatorMessage::class.java)
                    var computerIds = ""
                    var monitorIds = ""
                    for (computer in aggregatorMessage.computers) {
                        computerIds += "${computer.id},"
                    }
                    for (monitor in aggregatorMessage.monitors) {
                        monitorIds += "${monitor.id},"
                    }
                    val order = Order(id = null, computers = computerIds.dropLast(1), monitors = monitorIds.dropLast(1))

                    orderFacade.addNewOrder(order)

                    // Send response back
                    val gateway = context.getBean(MqttClientConfig::class.java).customMqttClient()
                    gateway.publish("result", "Success!".toByteArray(), 0, false)
                }
                /*
                "splitter" -> {
                    println(it.payload)
                }
                "contentFilter" -> {

                }
                */
                else -> throw(Throwable("No queue specified!"))
            }
        }
    }
}
