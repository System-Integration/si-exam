package com.oliverloenning.backend.logic

import com.oliverloenning.backend.database.daos.Feedback
import com.oliverloenning.backend.database.repositories.FeedbackRepository
import org.springframework.stereotype.Component

@Component
class FeedbackFacade(private val feedbackRepository: FeedbackRepository) {

    fun saveFeedbackToDatabase(feedback: Feedback) = feedbackRepository.save(feedback)
}