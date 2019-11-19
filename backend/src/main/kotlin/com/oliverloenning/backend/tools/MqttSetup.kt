package com.oliverloenning.backend.tools

import com.google.gson.Gson
import com.oliverloenning.backend.daos.Order
import com.oliverloenning.backend.dtos.AggregatorMessage
import com.oliverloenning.backend.facades.OrderFacade
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.integration.annotation.Aggregator
import org.springframework.integration.annotation.ServiceActivator
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter
import org.springframework.integration.core.MessageProducer
import org.springframework.integration.channel.DirectChannel
import org.springframework.messaging.MessageChannel
import org.springframework.messaging.MessageHandler


@Configuration
class MqttSetup (private val orderFacade: OrderFacade) {

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
            println(it)
            when (it.headers["mqtt_receivedTopic"]) {
                "aggregator" -> {
                    
                    val gson = Gson()
                    val aggregatorMessage = gson.fromJson(it.payload as String, AggregatorMessage::class.java)
                    var computerIds = ""
                    var monitorIds = ""
                    aggregatorMessage.computers
                    for (computer in aggregatorMessage.computers) {
                        computerIds += "${computer.id},"
                    }
                    for (monitor in aggregatorMessage.monitors) {
                        monitorIds += "${monitor.id},"
                    }
                    val order = Order(id = null, computers = computerIds.dropLast(1), monitors = monitorIds.dropLast(1))

                    orderFacade.addNewOrder(order)
                    TODO("Send something back to the client")
                }
                "splitter" -> {
                    println(it.payload)
                }
                "contentFilter" -> {

                }
                else -> throw(Throwable("No queue specified!"))
            }
        }
    }
}