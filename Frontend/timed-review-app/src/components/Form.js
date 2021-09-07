import React, {useState} from 'react'
import axios from 'axios'

export default function Form() {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [field, setField] = useState("")
    const [subject, setSubject] = useState("")
    
    const HandleTitle = (e) => {
        setTitle(e.target.value)
    }

    const HandleBody = (e) => {
        setBody(e.target.value)
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
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
  
        <form action="title">
            <label>Title
                <input type="text" id="title" value={title} onChange={(e) => HandleTitle(e)}/>
            </label>

            <label>Body
            <input type="text" id="body" value={body} onChange={(e) => HandleBody(e)}/>
            </label>

            <label>Field
            <input type="text" id="field" value={field} onChange={(e) => HandleField(e)}/>
            </label>

            <label>Subject
            <input type="text" id="subject" value={subject} onChange={(e) => HandleSubject(e)}/>
            </label>

            <button onClick={(e) => HandleSubmit(e)}>Submit</button>
        </form>
    )
}
