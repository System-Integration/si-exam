package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Monitor
import com.oliverloenning.backend.facades.MonitorFacade
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MonitorController(private val monitorFacade: MonitorFacade) {
    @RequestMapping("/monitors")
    fun monitors(): List<Monitor> = monitorFacade.getAllMonitors()
}
