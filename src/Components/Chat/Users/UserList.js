import React from 'react'

const UserList = ({ users })=>(
  <div className="card-body contacts_body">
    <ul className="contacts">
      { users && users.length>0?
        users.map((e, i)=>(
          <User key={ i } {...e} />
        ))
      :null }
    </ul>
  </div>
)

const User = ()=>{
  return(
    <li className="active">
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" src="us" />
          <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <span>Khalid</span>
          <p>Kalid is online</p>
        </div>
      </div>
    </li>
  )
}

export default UserList
