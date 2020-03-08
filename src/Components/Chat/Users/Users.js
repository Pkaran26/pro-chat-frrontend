import React, { useState } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

const Users = ()=>{

  return(
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <UserForm />
        <UserList />
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default Users

/*<UserList />*/
