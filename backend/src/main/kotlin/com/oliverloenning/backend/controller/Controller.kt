package com.oliverloenning.backend.controller

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class Controller {
    @RequestMapping("/")
    fun hello(): String {
        return "It works!!!!!"
    }
}