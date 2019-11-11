package com.oliverloenning.backend.facades

import com.oliverloenning.backend.daos.Monitor
import com.oliverloenning.backend.repositories.MonitorRepository
import com.oliverloenning.backend.utils.sendSuccess

class MonitorFacade(private val monitorRepository: MonitorRepository) {
    fun addMonitor(monitor: Monitor): Monitor = monitorRepository.save(monitor)

    fun deleteMonitor(monitor: Monitor): String = monitorRepository.delete(monitor).sendSuccess()

    fun findMonitorById(id: Long): Monitor = monitorRepository.findById(id).get()