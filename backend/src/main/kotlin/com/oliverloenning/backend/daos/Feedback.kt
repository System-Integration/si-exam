package com.oliverloenning.backend.daos

import javax.persistence.*

@Entity
data class Feedback(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name= "FEEDBACK_ID")
        val id: Long,
        val answer1: Long,
        val answer2: Long,
        val answer3: Long,
        val answer4: Long,
        val answer5: Long

)