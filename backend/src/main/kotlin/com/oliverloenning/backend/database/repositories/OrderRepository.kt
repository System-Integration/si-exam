package com.oliverloenning.backend.database.repositories

import com.oliverloenning.backend.database.daos.Order
import org.springframework.data.jpa.repository.JpaRepository

interface OrderRepository : JpaRepository<Order, Long> {
}