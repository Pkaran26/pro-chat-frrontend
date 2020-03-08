import React, { useState } from 'react'

const UserForm = ()=>{
  const [search, setSearch] = useState('')

  return(
    <div className="card-header">
      <div className="input-group">
        <input type="text" onChange={ (e)=> setSearch(e.target.value) } placeholder="Search..." value={ search } className="form-control search" />
        <div className="input-group-prepend">
          <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
        </div>
      </div>
    </div>
  )
}

export default UserForm
