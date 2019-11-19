package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity
data class Order(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null,
        val computers: String,
        val monitors: String
)