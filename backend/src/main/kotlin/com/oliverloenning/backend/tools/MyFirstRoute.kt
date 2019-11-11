package com.oliverloenning.backend.tools

import org.apache.camel.builder.RouteBuilder
import org.springframework.stereotype.Component

@Component
class MyRoute : RouteBuilder() {

    @Throws(Exception::class)
    override fun configure() {
        from("timer:foo").to("log:bar")
    }
}