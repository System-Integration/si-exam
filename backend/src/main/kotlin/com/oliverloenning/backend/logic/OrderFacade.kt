package com.oliverloenning.backend.logic

import com.oliverloenning.backend.database.daos.Order
import com.oliverloenning.backend.dto.AjaxResponse
import com.oliverloenning.backend.dto.OrderResponse
import com.oliverloenning.backend.publish
import com.oliverloenning.backend.database.repositories.OrderRepository
import org.springframework.context.ApplicationContext
import org.springframework.stereotype.Component

@Component
class OrderFacade (private val orderRepository: OrderRepository, private val context: ApplicationContext, private val computerFacade: ComputerFacade, private val monitorFacade: MonitorFacade) {

    fun addNewOrder(order: Order): AjaxResponse {
        val computers = order.computers.map { computerFacade.findComputer(it.id)}
        val monitors = order.monitors.map { monitorFacade.findMonitorById(it.id) }
        val result = orderRepository.save(Order(computers = computers, monitors = monitors))

        publish(context, "${result.id}|${result.createdDate}")
        return OrderResponse(true, "You successfully purchased your items!", result.id)
    }

}