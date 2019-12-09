package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Computer
import com.oliverloenning.backend.daos.Monitor
import com.oliverloenning.backend.facades.ComputerFacade
import com.oliverloenning.backend.facades.MonitorFacade
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ComputerController(private val computerFacade: ComputerFacade, private val monitorFacade: MonitorFacade) {

    @RequestMapping("/computers")
    fun computers(): List<Computer> = computerFacade.getAllComputers()
}