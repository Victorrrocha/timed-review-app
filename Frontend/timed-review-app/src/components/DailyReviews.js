import React, { useState, useEffect } from 'react'
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
                        return (<Card key={review._id} title={review.title} 
                            body={review.body} 
                            field={review.field}
                            subject={review.subject} />
                            )
                    })
                }
            </div>
        </div>
    )
}
