import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import styles from '../styles/Form.module.css'

//Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function ReviewPage() {

    const {id} = useParams()

    const [title, setTitle] = useState('')
    const [field, setField] = useState('')
    const [subject, setSubject] = useState('')
    // const [review, setReview] = useState(null)
    const [value, setValue] = useState(''); //body

    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:5000/review/'+id)
            .then((result) => {
                console.log(result.data.body)
                //setReview(result.data)
                setTitle(result.data.title)
                setField(result.data.field)
                setSubject(result.data.subject)
                setValue(result.data.body)
            })
            .catch(err => console.log(err))    
            }, [id])

    const HandleTitle = (e) => {
        setTitle(e.target.value)
    }

    const HandleField = (e) => {
        setField(e.target.value)
    }

    const HandleSubject = (e) => {
        setSubject(e.target.value)
    }
        
    const HandleDelete = (e) => {
        e.preventDefault()

        axios.delete('http://localhost:5000/review/'+id)
        .then((result) => {
            console.log("Blog deleted")
            history.push('/')
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        const Review = {
            author: "Victor",
            title,
            body: value,
            field,
            subject,
            date_of_creation: new Date(),
            mastery_level: 0,
            number_of_reviews : 0,
        }
        
        //console.log(Review)

        axios.put('http://localhost:5000/review/'+id, Review)
        .then((result) => {
            console.log(result)
            //history.push('/')
        })
        .catch(err => console.log(err))
    }

    return (
        
        <>
            {value ? (
                <div className="full-width">
                    <form>
                        <div className="save-delete-container">
                            <button className="btn margin-left" onClick={(e) => HandleSubmit(e)}>Save</button>
                            <button className="btn margin-left" onClick={(e) => HandleDelete(e)}>Delete</button>
                        </div>
                        
                        <label name="Title">
                            <input 
                                className={`${styles.input} ${styles.title}`} 
                                placeholder="Title" 
                                type="text" id="title" 
                                value={title} onChange={(e) => HandleTitle(e)}/>
                        </label>

                        <label name="Field">
                            <input 
                                className={`${styles.input} ${styles.field}`} 
                                placeholder="Field"
                                type="text" id="field" 
                                value={field} onChange={(e) => HandleField(e)}/>
                        </label>

                        <label name="Subject">
                            <input 
                                className={`${styles.input} ${styles.subject}`} 
                                placeholder="Subject"
                                type="text" id="subject" 
                                value={subject} onChange={(e) => HandleSubject(e)}/>
                        </label>

                        <div style={{marginBottom: '1em'}}>
                            <ReactQuill style={{minHeight: '100%'}} theme="snow" value={value} onChange={setValue} className="quill-editor"/>
                        </div>
                    </form>
                </div>
            ) : <p>Loading...</p>}
        </>
    )
}
