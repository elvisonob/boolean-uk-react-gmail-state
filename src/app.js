import Header from './components/header'

import initialEmails from './data/emails'
import {useState} from 'react'

import './styles/app.css'
import React from 'react'
import { render } from 'react-dom'


function App() {

 


 const [emails, setEmails]=useState(initialEmails)
  // Use initialEmails for state

  const toggleRead = (email) => {
    email.read=!email.read
  }
    






  console.log(initialEmails)

  



  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            //onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              //onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emails.map((displayEmail)=> {
let emailClass='email'
if (displayEmail.read) {
  emailClass+='read'
} else {
  emailClass +='unread'
}

return <li className='email'>
<div className="select">
<input
  className="select-checkbox"
  onClick={()=>toggleRead(displayEmail)}
  type="checkbox"/>
  
  
</div>
<div className="star">
<input
  className="star-checkbox"
  type="checkbox"
  checked={displayEmail.starred}
/>
</div>
<div className="sender">
{displayEmail.sender}
</div>
<div className="title">
  {displayEmail.title}
</div>
</li>})
}</main>
    </div>
  )
}

export default App
