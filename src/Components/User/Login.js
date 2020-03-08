import React, { useState } from 'react'
import { TextField, Submit, Anchor } from './Inputs'

const Login = ({ doLogin, changeState })=>{
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  })

  const setter = (key, value)=>{
    setPayload({
      ...payload,
      [key]: value
    })
  }
  return(
    <div className="col-lg-4">
      <div className="card bg-light text-white" style={{ marginTop: '50px' }}>
        <div className="card-body">
          <h4 className="card-title">Login</h4>
          <form method="post" onSubmit={ (e)=>{
            e.preventDefault()
            doLogin(payload)
          } }>
            <TextField
              label="Email"
              type="email"
              value={ payload.email }
              onChange={ (e)=> setter("email", e) }
            />
            <TextField
              label="Password"
              type="password"
              value={ payload.password }
              onChange={ (e)=> setter("password", e) }
            />
            <div className="form-group">
              <Submit
                value="Login"
              />
              <Anchor
                returnFunc={ changeState }
                label="Signup"
                value={ false }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
