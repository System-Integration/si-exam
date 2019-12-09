package com.oliverloenning.backend.dtos

import com.oliverloenning.backend.daos.Computer
import com.oliverloenning.backend.daos.Monitor

data class OrderDTO(val monitors: List<Monitor>, val computers: List<Computer>)