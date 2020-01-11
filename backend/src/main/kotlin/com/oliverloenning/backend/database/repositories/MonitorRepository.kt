package com.oliverloenning.backend.database.repositories

import com.oliverloenning.backend.database.daos.Monitor
import org.springframework.data.jpa.repository.JpaRepository

interface MonitorRepository : JpaRepository<Monitor, Long> {
}