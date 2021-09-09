import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/DailyReviews.module.css'
import axios from 'axios'
import Card from '../components/Card'

export default function DailyReviews() {

    const [reviews, setReview] = useState([])
  
    useEffect(() => {
        GetReviews()
    }, [])

    const GetReviews = () => axios.get('http://localhost:5000/reviews')
        .then(result => {
        setReview(result.data)
        })
        .catch(err => console.log(err))

    return (
        <div>
            <div className={styles.strip}><p>For today, September 6th, 2021</p></div>

            <div className={styles.card_container}>
                {
                    reviews.map(review => {
                        return (
                        <Link to={`/review/${review._id}`} key={review._id} >
                            <Card  title={review.title} 
                                //body={review.body} 
                                field={review.field}
                                subject={review.subject} />
                        </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
