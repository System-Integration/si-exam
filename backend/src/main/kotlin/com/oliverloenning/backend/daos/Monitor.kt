package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity
data class Monitor(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "MONITOR_ID")
        val id: Long,
        val monitorName: String,
        val resolution: String,
        val aspectRatio: String,
        val screenSize: String,
        val responseTime: String,
        val refreshRate: String,
        val price: Int
)