import React, { Component, Fragment } from 'react'
import Users from './Users/Users'
import Message from './Message/Message'

class Chat extends Component{
  constructor(){
    super()
    this.state = {
      socket_id: null
    }
    this.socket = null
  }

  render(){
    return(
      <Fragment>
        <Users />
        <Message />
      </Fragment>
    )
  }
}
export default Chat
/*
  <Message />*/
