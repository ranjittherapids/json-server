import React from 'react'
import './header.css'
export default function Header() {
    return (
        <div className="header_container">
          <a href="/"> <h1>Best Quotes</h1></a>  
            <a href="/addquotes"><h1>Add Quotes</h1></a>
        </div>
    )
}
