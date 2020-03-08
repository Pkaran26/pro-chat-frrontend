import React, { useState } from 'react'
import moment from 'moment'
import { TextField, Submit, Anchor } from './Inputs'

const Signup = ({ doSignup, changeState })=>{
  const [payload, setPayload] = useState({
    first_name: '',
    last_name: '',
    email: '',
    conversions: [],
    created_at: '',
    is_active: true,
    report: [],
    password: ''
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
          <h4 className="card-title">Signup</h4>
          <form method="post" onSubmit={ (e)=>{
            e.preventDefault()
            doSignup({
              ...payload,
              created_at: moment()
            })
          } }>
            <TextField
              label="First Name"
              type="first_name"
              value={ payload.first_name }
              onChange={ (e)=> setter("first_name", e) }
            />
            <TextField
              label="Last Name"
              type="last_name"
              value={ payload.last_name }
              onChange={ (e)=> setter("last_name", e) }
            />
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
                value="Signup"
              />
              <Anchor
                returnFunc={ changeState }
                label="Login"
                value={ true }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
