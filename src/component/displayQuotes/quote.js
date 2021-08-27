import React from 'react'
import './quote.css'
export default function quote({quote,author,index}) {

    return (
       
        <div  className={quote?"quote_container":null}>
           {quote? <h2>{quote}</h2> :null} 
           { author? <small>{author}</small>:null} 
           {author?<i className="fas fa-heart"><span>33 Likes</span></i> :null} 
            
            
        </div>
    )
}
