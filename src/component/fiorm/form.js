import React from 'react'

export default function form() {
    return (
        <div>
            <form onSubmit={(e)=>{
e.preventDefault()
            }}>
             <input type='text' placeholder='name'/>
<input type='password' placeholder='password'/>  
<button>submit</button>
            </form>

        </div>
    )
}
