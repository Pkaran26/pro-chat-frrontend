import React, { useState } from 'react'

const MessageForm = ()=>{
  const [message, setMessage] = useState('')

  return(
    <div className="card-footer">
      <div className="input-group">
        <div className="input-group-append">
          <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
        </div>
        <textarea value={ message } onChange={ (e)=> setMessage(e.target.value) } className="form-control type_msg" placeholder="Type your message..."></textarea>
        <div className="input-group-append">
          <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
        </div>
      </div>
    </div>
  )
}

export default MessageForm
