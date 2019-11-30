package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity(name = "orders")
class Order(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long?,
        @OneToMany
        var computers: List<Computer>,
        @OneToMany
        var monitors: List<Monitor>
)