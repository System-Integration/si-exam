package com.oliverloenning.backend.repositories

import com.oliverloenning.backend.daos.Feedback
import org.springframework.data.jpa.repository.JpaRepository

interface FeedbackRepository : JpaRepository<Feedback, Long> {

}