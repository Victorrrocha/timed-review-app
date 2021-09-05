const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    //title, body, subject, author, date, mastery_level, review_date
    author : {
        type: String,
        required: true,
    },
    title : {
        type: String,
        required: true
    },
    body : {
        type: String
    },
    field: {
        type: String
    },
    subject : {
        type: String
    },
    date_of_creation : {
        type: Date,
        default: Date,
    },
    mastery_level : {
        type: Number
    },
    number_of_reviews : {
        type: Number
    },
    next_schedule_review : {
        type: Date
    }
})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review