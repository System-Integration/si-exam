package com.oliverloenning.backend.dto

class OrderResponse(status: Boolean, message: String, val resultId: Long?) : AjaxResponse(status, message)