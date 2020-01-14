package com.oliverloenning.backend.controller

import com.oliverloenning.backend.database.daos.Feedback
import com.oliverloenning.backend.dto.AjaxResponse
import com.oliverloenning.backend.logic.FeedbackFacade
import com.oliverloenning.backend.sendResponse
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class FeedbackController(private val feedbackFacade: FeedbackFacade) {

    @PostMapping("/feedbacks")
    fun createFeedback(@RequestBody feedback: Feedback): AjaxResponse = feedbackFacade.saveFeedbackToDatabase(feedback).sendResponse(true, "Feedback has been submitted! thank you very much.");

    @RequestMapping("/feedbacks")
    fun feedbacks(): List<Feedback> = feedbackFacade.getAllFeedbacks();
}