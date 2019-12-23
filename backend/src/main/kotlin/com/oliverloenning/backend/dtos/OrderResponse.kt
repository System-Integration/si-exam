package com.oliverloenning.backend.dtos

class OrderResponse(status: Boolean, message: String, val resultId: Long?) : AjaxResponse(status, message)