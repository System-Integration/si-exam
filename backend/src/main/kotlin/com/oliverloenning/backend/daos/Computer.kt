package com.oliverloenning.backend.daos

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


@Entity
data class Computer(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long,
        val computerName: String,
        val cpu: String,
        val ram: String,
        val gpu: String,
        val hardDrive: String,
        val computerType: String,
        val price: Int
)
