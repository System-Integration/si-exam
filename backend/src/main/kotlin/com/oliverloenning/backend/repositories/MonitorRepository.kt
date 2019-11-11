package com.oliverloenning.backend.repositories

import com.oliverloenning.backend.daos.Monitor
import org.springframework.data.jpa.repository.JpaRepository

interface MonitorRepository : JpaRepository<Monitor, Long> {
}