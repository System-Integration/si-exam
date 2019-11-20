package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Computer
import com.oliverloenning.backend.daos.Monitor
import com.oliverloenning.backend.facades.ComputerFacade
import com.oliverloenning.backend.facades.MonitorFacade
import com.oliverloenning.backend.repositories.ComputerRepository
import com.oliverloenning.backend.tools.MqttSetup
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class Controller(private val computerFacade: ComputerFacade, private val monitorFacade: MonitorFacade) {
    @RequestMapping("/")
    fun hello(): String {
        return "It works!!!!!"
    }


    @RequestMapping("/computers")
    fun computers(): List<Computer> = computerFacade.getAllComputers()

    @RequestMapping("/monitors")
    fun monitors(): List<Monitor> = monitorFacade.getAllMonitors()

}