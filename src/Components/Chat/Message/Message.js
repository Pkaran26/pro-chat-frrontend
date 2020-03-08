import React, { useState } from 'react'
import Header from './Header'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const Message = ()=>{
  const [conversions, setConversions] = useState([])

  return(
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <Header />
        <MessageList
          conversions={ conversions }
        />
        <MessageForm />
      </div>
    </div>
  )
}

export default Message
