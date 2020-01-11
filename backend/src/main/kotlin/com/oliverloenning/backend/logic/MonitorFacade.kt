package com.oliverloenning.backend.logic

import com.oliverloenning.backend.database.daos.Monitor
import com.oliverloenning.backend.database.repositories.MonitorRepository
import org.springframework.stereotype.Component

@Component
class MonitorFacade(private val monitorRepository: MonitorRepository) {
    fun addMonitor(monitor: Monitor): Monitor = monitorRepository.save(monitor)

    fun deleteMonitor(monitor: Monitor): Unit = monitorRepository.delete(monitor)

    fun findMonitorById(id: Long): Monitor = monitorRepository.findById(id).get()

    fun getAllMonitors(): List<Monitor> = monitorRepository.findAll()
}
