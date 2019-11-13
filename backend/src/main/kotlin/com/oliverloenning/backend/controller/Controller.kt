package com.oliverloenning.backend.controller

import com.oliverloenning.backend.tools.MqttSetup
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class Controller(private val ourMqttClient: MqttSetup) {
    @RequestMapping("/")
    fun hello(): String {
        return "It works!!!!!"
    }
}