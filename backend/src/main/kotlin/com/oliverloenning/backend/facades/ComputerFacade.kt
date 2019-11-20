package com.oliverloenning.backend.facades

import com.oliverloenning.backend.daos.Computer
import com.oliverloenning.backend.repositories.ComputerRepository
import com.oliverloenning.backend.utils.sendSuccess
import org.springframework.stereotype.Component

@Component
class ComputerFacade(private val computerRepository: ComputerRepository) {
        fun addComputer(computer: Computer): Computer = computerRepository.save(computer)

        fun deleteComputer(computer: Computer): String = computerRepository.delete(computer).sendSuccess()

        fun findComputer(id: Long): Computer = computerRepository.findById(id).get()

        fun getAllComputers(): List<Computer> = computerRepository.findAll()
}