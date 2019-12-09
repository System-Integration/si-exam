package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Order
import com.oliverloenning.backend.dtos.OrderDTO
import com.oliverloenning.backend.facades.OrderFacade
import org.springframework.web.bind.annotation.*

@RestController
class OrderController(private val orderFacade: OrderFacade) {

    @PostMapping("/orders")
    fun createOrder(@RequestBody orderDto: OrderDTO): String {
        val newOrder = Order(computers = orderDto.computers, monitors = orderDto.monitors)

        orderFacade.addNewOrder(newOrder)
        return "Hello World!!!!!!!!!"
    }
}