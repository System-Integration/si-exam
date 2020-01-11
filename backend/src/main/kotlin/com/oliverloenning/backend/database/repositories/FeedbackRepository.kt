package com.oliverloenning.backend.database.repositories

import com.oliverloenning.backend.database.daos.Feedback
import org.springframework.data.jpa.repository.JpaRepository

interface FeedbackRepository : JpaRepository<Feedback, Long> {

}