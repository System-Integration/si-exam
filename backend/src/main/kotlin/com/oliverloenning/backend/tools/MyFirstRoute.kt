package com.oliverloenning.backend.tools

import org.apache.camel.CamelContext
import org.apache.camel.builder.RouteBuilder
import org.springframework.stereotype.Component

@Component
class MyRoute(context: CamelContext?) : RouteBuilder(context) {


    @Throws(Exception::class)
    override fun configure() {
        from("timer:foo").to("log:bar")
    }
}