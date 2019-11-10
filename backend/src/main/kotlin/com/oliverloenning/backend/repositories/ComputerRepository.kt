package com.oliverloenning.backend.repositories

import com.oliverloenning.backend.daos.Computer
import org.springframework.data.jpa.repository.JpaRepository

interface ComputerRepository : JpaRepository<Computer, Long> {
}