package com.oliverloenning.backend.daos

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Monitor(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long,
        val monitorName: String,
        val resolution: String,
        val aspectRatio: String,
        val screenSize: String,
        val responseTime: String,
        val refreshRate: String,
        val price: Int
)