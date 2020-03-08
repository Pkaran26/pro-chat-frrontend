import React, { Component } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat'

class App extends Component{
  constructor(){
    super()
    this.state = {
      socket_id: null
    }
    this.socket = null
  }

  render(){
    return (
      <div className="App">
        <div className="container-fluid h-100">
    			<div className="row justify-content-center h-100">
            <Chat />
    			</div>
    		</div>

      </div>
    )
  }
}

export default App;
