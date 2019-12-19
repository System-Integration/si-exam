package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Order
import com.oliverloenning.backend.dtos.AjaxResponse
import com.oliverloenning.backend.dtos.OrderDTO
import com.oliverloenning.backend.facades.OrderFacade
import com.oliverloenning.backend.tools.MqttClientConfig
import com.oliverloenning.backend.tools.publish
import org.eclipse.paho.client.mqttv3.MqttClient
import org.eclipse.paho.client.mqttv3.MqttMessage
import org.springframework.context.ApplicationContext
import org.springframework.web.bind.annotation.*

@RestController
class OrderController(private val orderFacade: OrderFacade, private val context: ApplicationContext) {

    @PostMapping("/orders")
    fun createOrder(@RequestBody orderDto: OrderDTO): AjaxResponse {
        val newOrder = Order(computers = orderDto.computers, monitors = orderDto.monitors)

        val result = orderFacade.addNewOrder(newOrder)

        println("Order has been created with id of: ${result.id}")

        publish(context, "Order has been created with order: ${result.id}")

        return AjaxResponse(true, "Success!")
    }
}