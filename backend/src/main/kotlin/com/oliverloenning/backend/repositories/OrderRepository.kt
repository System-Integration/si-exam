package com.oliverloenning.backend.repositories

import com.oliverloenning.backend.daos.Order
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

interface OrderRepository : JpaRepository<Order, Long> {
}