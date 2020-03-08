import React from 'react'
import Left from './Left'
import Right from './Right'

const MessageList = ({ conversions })=>(
  <div className="card-body msg_card_body">
    { conversions && conversions.length>0?
      conversions.map((e, i)=>{
        if(true){
          return(
            <Left key={ i } {...e} />
          )
        }else {
          return(
            <Right key={ i } {...e} />
          )
        }
      })
    :null }
  </div>
)

export default MessageList
