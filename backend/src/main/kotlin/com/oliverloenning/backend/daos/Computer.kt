package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity
data class Computer(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "COMPUTER_ID")
        val id: Long,
        val computerName: String,
        val cpu: String,
        val ram: String,
        val gpu: String,
        val hardDrive: String,
        val computerType: String,
        val price: Int
)
