package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Order
import com.oliverloenning.backend.dtos.AjaxResponse
import com.oliverloenning.backend.facades.ComputerFacade
import com.oliverloenning.backend.facades.MonitorFacade
import com.oliverloenning.backend.facades.OrderFacade
import com.oliverloenning.backend.tools.publish
import org.springframework.context.ApplicationContext
import org.springframework.web.bind.annotation.*

@RestController
class OrderController(private val monitorFacade: MonitorFacade, private val orderFacade: OrderFacade, private val computerFacade: ComputerFacade, private val context: ApplicationContext) {

    @PostMapping("/orders")
    fun createOrder(@RequestBody order: Order): AjaxResponse {

        val computers = order.computers.map { computerFacade.findComputer(it.id)}
        val monitors = order.monitors.map { monitorFacade.findMonitorById(it.id) }
        val result = orderFacade.addNewOrder(Order(computers = computers, monitors = monitors))

        publish(context, "${result.id}|${result.createdDate}")

        return AjaxResponse(true, "Success!")
    }
}