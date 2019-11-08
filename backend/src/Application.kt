package com.siexam

import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.html.*
import kotlinx.html.*
import kotlinx.css.*
import io.ktor.client.*
import io.ktor.client.engine.apache.*
import io.ktor.features.CORS
import java.nio.file.Paths

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    install(CORS)
    /*
    val client = HttpClient(Apache) {
    }
    */

    routing {
        get("/") {
            call.respondText("HELLO WORLD!!", contentType = ContentType.Text.Plain)
        }
    }
}
