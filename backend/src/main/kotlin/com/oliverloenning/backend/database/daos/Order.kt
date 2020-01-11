package com.oliverloenning.backend.database.daos

import java.util.*
import javax.persistence.*

@Entity(name = "orders")
data class Order(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "ORDER_ID")
        val id: Long? = null,
        @ManyToMany
        @JoinTable(name = "ORDER_COMPUTER", joinColumns = [JoinColumn(name = "ORDER_ID")],
                inverseJoinColumns = [JoinColumn(name = "COMPUTER_ID")])
        val computers: List<Computer>,
        @ManyToMany
        @JoinTable(name = "ORDER_MONITOR", joinColumns = [JoinColumn(name = "ORDER_ID")],
                inverseJoinColumns = [JoinColumn(name = "MONITOR_ID")])
        val monitors: List<Monitor>,
        @Temporal(TemporalType.TIMESTAMP)
        val createdDate: Date = Date()
)