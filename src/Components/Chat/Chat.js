import React, { Component, Fragment } from 'react'
import Users from './Users/Users'
import Message from './Message/Message'

class Chat extends Component{
  constructor(props){
    super(props)
    this.state = {
      socketId: null
    }
    this.socket = null
  }

  componentDidMount(){
    const { socketId, socket } = this.props
    this.setState({
      socketId
    })
    this.socket = socket
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
