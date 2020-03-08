import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import './App.css';
import Chat from './Components/Chat/Chat'
import Login from './Components/User/Login'
import Signup from './Components/User/Signup'
import { CONNECTION, DISCONNECT, USER_SIGNUP, USER_LOGIN } from './SocketEvents'

class App extends Component{
  constructor(){
    super()
    this.state = {
      socketId: null,
      loggedIn: false,
      loginPage: true,
      signup: ''
    }
    this.socket = null
  }

  componentDidMount(){
    this.socket = socketIOClient('http://localhost:3005');
    this.socket.on(CONNECTION, ()=>{
      this.setState({
        socketId: this.socket.id
      })
    })

    this.socket.on(DISCONNECT, ()=>{
      this.setState({
        socketId: ''
      })
    })
  }

  changeState = (key, value)=>{
    this.setState({
      [key]: value
    })
  }

  doLogin = (payload)=>{
    const { socketId } = this.state
    this.socket.emit(USER_LOGIN, {
      socket_id: socketId,
      payload: payload
    }, (data)=>{
      this.setState({
        looggedIn: data.status
      })
    })
  }

  doSignup = (payload)=>{
    const { socketId } = this.state
    this.socket.emit(USER_SIGNUP, {
      socket_id: socketId,
      payload: payload
    }, (data)=>{
      this.setState({
        signup: data.status
      })
    })
  }

  render(){
    const { loggedIn, loginPage, socketId } = this.state
    return (
      <div className="App">
        <div className="container-fluid h-100">
    			<div className="row justify-content-center h-100">
            { loggedIn?
              <Chat
                socketId={ socketId }
                socket={ this.socket }
              />
            :
              loginPage?
              <Login
                doLogin={ this.doLogin }
                changeState={ this.changeState }
              />
              :
              <Signup
                doSignup={ this.doSignup }
                changeState={ this.changeState }
              />
            }
    			</div>
    		</div>

      </div>
    )
  }
}

export default App;
