import React, {useState} from 'react'
import axios from 'axios'
import styles from '../styles/Form.module.css'
import { useHistory } from 'react-router-dom'

//Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Form() {

    const [title, setTitle] = useState('')
    const [field, setField] = useState('')
    const [body, setBody] = useState('');
    const [subject, setSubject] = useState('')
    const history = useHistory()

    const HandleTitle = (e) => {
        setTitle(e.target.value)
    }

    const HandleField = (e) => {
        setField(e.target.value)
    }

    const HandleSubject = (e) => {
        setSubject(e.target.value)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        const Review = {
            author: "Victor",
            title,
            body,
            field,
            subject,
            date_of_creation: new Date(),
            mastery_level: 0,
            number_of_reviews : 0,
        }
        
        console.log(Review)

        axios.post('http://localhost:5000/review/', Review)
        .then((result) => {
            console.log(result)
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    const HandleCancel = () => {
        history.push('/')
    }

    return (
        <div className="full-width">
            <form className={styles.form} action="title">
                <label name="Title">
                    <input 
                        className={`${styles.input} ${styles.title}`} 
                        placeholder="Title" 
                        type="text" id="title" 
                        value={title} onChange={(e) => HandleTitle(e)}/>
                </label>

                <label name="Body">

                    <div style={{marginBottom: '1em'}}>
                        <ReactQuill style={{minHeight: '100%'}} theme="snow" value={body} onChange={setBody} className="quill-editor"/>
                    </div>

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

                <div className={styles.btn_container}>
                    <button className="btn" onClick={() => HandleCancel()}>Cancel</button>
                    <button className="btn" onClick={(e) => HandleSubmit(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}
