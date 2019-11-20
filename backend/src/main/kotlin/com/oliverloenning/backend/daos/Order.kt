package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity(name = "orders")
class Order(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long?,
        var computers: String,
        var monitors: String
)