package com.oliverloenning.backend.controller

import com.oliverloenning.backend.database.daos.Computer
import com.oliverloenning.backend.logic.ComputerFacade
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ComputerController(private val computerFacade: ComputerFacade) {
    @RequestMapping("/computers")
    fun computers(): List<Computer> = computerFacade.getAllComputers()
    
    @RequestMapping("/computers/{id}")
    fun getComputer(@PathVariable id: Long) = computerFacade.findComputer(id)
}