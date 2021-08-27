import React, { useRef, useState } from 'react'
import axios from 'axios'
import './addqoute.css'
export default function AddQuote() {
    const ref = useRef()
    const [quote, setquote] = useState()
    const [author, setauthor] = useState()
    const [quotesvalidation, setquotesvalidation] = useState(true)
    const [authorvalidation, setauthorvalidation] = useState(true)

    const alldata = {
        id: Math.random(),
        quote: quote,
        author: author
    }
    const submit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3000/quotes", alldata)
        return setquote(""), setauthor("")
    }
    return (
        <div className="sendData_container">
            <form onSubmit={submit}>
                <div className="inputContainer">
                    <small>Quote</small>
                    <textarea type="text" placeholder="enter quote" ref={ref} value={quote} onChange={(e) => {
                        if (e.target.value.length <= 200 && e.target.value.length>=0 ) {
                            setquotesvalidation(true)
                            setquote(e.target.value)
                        }
                        else{setquotesvalidation(false)}
                    }} />
                    {!quotesvalidation ? <p>quote must be less than 200 word</p> : null}
                </div>
                <div className="inputContainer">
                    <small>Author</small>
                    <input type="text" placeholder="Enter Author Name" value={author} onChange={(e) => {
                        if (e.target.value.length <= 40) {
                            setauthor(e.target.value)
                            setauthorvalidation(true)
                        }
                        else{setauthorvalidation(false)}
                    }} />
                    {!authorvalidation ? <p>author must be less than 40 word</p> : null}
                </div>
                <button type="submit"   onClick={() => window.location.href = "/"}>save</button>
            </form>
        </div>
    )
}
