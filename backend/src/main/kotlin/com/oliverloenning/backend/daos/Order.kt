package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity(name = "orders")
class Order(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null,
        @OneToMany(mappedBy = "computerOrder")
        var computers: List<Computer>,
        @OneToMany(mappedBy = "monitorOrder")
        var monitors: List<Monitor>
)