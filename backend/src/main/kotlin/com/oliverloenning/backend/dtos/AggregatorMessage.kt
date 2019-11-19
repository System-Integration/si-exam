package com.oliverloenning.backend.dtos

import com.oliverloenning.backend.daos.Computer
import com.oliverloenning.backend.daos.Monitor

data class AggregatorMessage(
        val computers: List<Computer>,
        val monitors: List<Monitor>
)