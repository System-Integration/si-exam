package com.oliverloenning.backend.logic

import com.oliverloenning.backend.database.daos.Computer
import com.oliverloenning.backend.database.repositories.ComputerRepository
import org.springframework.stereotype.Component

@Component
class ComputerFacade(private val computerRepository: ComputerRepository) {
    fun addComputer(computer: Computer): Computer = computerRepository.save(computer)

    fun deleteComputer(computer: Computer): Unit = computerRepository.delete(computer)

    fun findComputer(id: Long): Computer = computerRepository.findById(id).get()

    fun getAllComputers(): List<Computer> = computerRepository.findAll()
}