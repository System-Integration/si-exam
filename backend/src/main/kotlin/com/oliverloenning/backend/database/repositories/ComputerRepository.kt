package com.oliverloenning.backend.database.repositories

import com.oliverloenning.backend.database.daos.Computer
import org.springframework.data.jpa.repository.JpaRepository

interface ComputerRepository : JpaRepository<Computer, Long> {
}