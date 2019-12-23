package com.oliverloenning.backend.controller

import com.oliverloenning.backend.daos.Feedback
import com.oliverloenning.backend.dtos.AjaxResponse
import com.oliverloenning.backend.repositories.FeedbackRepository
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class FeedbackController(private val feedbackRepository: FeedbackRepository) {

    @PostMapping("/feedback")
    fun getFeedback(@RequestBody feedback: Feedback): AjaxResponse {
        feedbackRepository.save(feedback);

        return AjaxResponse(true, "Feedback has been submitted! thank you very much.")
    }
}