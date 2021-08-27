import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.css'
import axios from 'axios'
import Quotes from './component/displayQuotes/quote'
import AddQuote from './component/addQuotes/AddQuote'
import Header from './component/header/Header'

export default function App() {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)
    const [noOfElement,setnoOfElement ] = useState(4)
   
    useEffect(() => {
        setisloading(true)
        axios.get("http://localhost:3000/quotes")
        .then(response=>setdata(response.data))
        .catch(error=>console.log(error))
        .finally(  setisloading(false))
        console.log("ok")
    }, [])
    console.log(noOfElement)
    return (
        <div className='app'>
            <Router>
                <Header/>
               
                <Switch >
                    <Route path="/addquotes">
                   
                        <AddQuote />
                    </Route>
                    <Route path='/'>
                    { isloading?<h1>loading.....</h1>
                    :(data.slice(0,noOfElement).map((datas ,index) => <Quotes index={index} key={datas.id} quote={datas.quote} author={datas.author} like={datas.likes} />)) }  
                      <button className="btn" onClick={(e)=>{
                           e.preventDefault();
                          setnoOfElement(noOfElement + 4)
                      }}>Add More</button>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}





