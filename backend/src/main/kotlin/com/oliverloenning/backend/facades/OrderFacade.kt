package com.oliverloenning.backend.facades

import com.oliverloenning.backend.daos.Order
import com.oliverloenning.backend.repositories.OrderRepository
import org.springframework.stereotype.Component

@Component
class OrderFacade (private val orderRepository: OrderRepository) {

    fun addNewOrder(order: Order) = orderRepository.save(order)
}