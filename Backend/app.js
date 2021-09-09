require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 5000
const mongoose = require('mongoose')
const Review = require('./models/Review')

//Connecting to Database
mongoose.connect(process.env.DBURI, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(port, () => {
    console.log(`Started listening on port ${port}`)
})

// Middleware
app.use(express.json())

//Routes

//Home
app.get('/', (req, res) => {
    res.redirect('/reviews')
})

//List all reviews
app.get('/reviews', (req, res) => {
    const all_reviews = Review.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Add review
app.post('/review', (req, res) => {
    const new_review = new Review(req.body)

    new_review.save()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Go to review page
app.get('/review/:id', (req,res) => {
    const id = req.params.id
    const review = Review.findById({_id: id})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => console.log(err))
})

//Edit a review
app.put('/review/:id', (req, res) => {
    const _id = req.params.id
    const {title, body, field, subject} = req.body;
    
    Review.findByIdAndUpdate({_id: _id}, {title, body, field, subject})
    .then((result) => res.send(result))
    .catch(err => console.log(err))
})

//Delete review
app.delete('/review/:id', (req, res) => {
    const id = req.params.id

    Review.findByIdAndDelete({_id: id})
    .then((result) => res.send(result))
    .catch(err => console.log(err))
})

//schedule next review