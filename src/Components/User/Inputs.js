import React from 'react'

export const TextField = ({ label, type, value, onChange })=>(
  <div className="form-group">
    <label>{ label }</label>
    <input
      type={ type }
      required
      className="form-control"
      onChange={ (e)=> onChange(e.target.value) }
      value={ value }
    />
  </div>
)

export const Submit = ({ value })=>(
  <input
    type="submit"
    value={ value }
    className="btn btn-primary"
  />
)

export const Anchor = ({ returnFunc, label, value })=>(
  <a className="btn btn-link" onClick={ (e)=>{
      e.preventDefault()
      returnFunc("loginPage", value)
    } }>Click here to { label }</a>
)
