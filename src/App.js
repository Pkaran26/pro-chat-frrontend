import React, { Component } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat'
import Login from './Components/User/Login'
import Signup from './Components/User/Signup'

class App extends Component{
  constructor(){
    super()
    this.state = {
      socket_id: null,
      loggedIn: false,
      loginPage: true,
    }
    this.socket = null
  }

  changeState = (key, value)=>{
    this.setState({
      [key]: value
    })
  }

  doLogin = (payload)=>{

  }

  doSignup = (payload)=>{

  }

  render(){
    const { loggedIn, loginPage } = this.state
    return (
      <div className="App">
        <div className="container-fluid h-100">
    			<div className="row justify-content-center h-100">
            { loggedIn?
              <Chat
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
