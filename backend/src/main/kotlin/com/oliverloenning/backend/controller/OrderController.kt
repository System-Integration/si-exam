package com.oliverloenning.backend.controller

import com.oliverloenning.backend.database.daos.Order
import com.oliverloenning.backend.dto.AjaxResponse
import com.oliverloenning.backend.logic.OrderFacade
import org.springframework.web.bind.annotation.*

@RestController
class OrderController(private val orderFacade: OrderFacade) {

    @PostMapping("/orders")
    fun createOrder(@RequestBody order: Order): AjaxResponse = orderFacade.addNewOrder(order)
}