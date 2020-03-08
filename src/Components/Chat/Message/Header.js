import React from 'react'
import ThreeDot from './ThreeDot'

const Header = ()=>(
  <div className="card-header msg_head">
  <div className="d-flex bd-highlight">
    <div className="img_cont">
      <img src="" className="rounded-circle user_img" />
      <span className="online_icon"></span>
    </div>
    <div className="user_info">
      <span>Chat with Khalid</span>
      <p>1767 Messages</p>
    </div>
  </div>
  <ThreeDot />
</div>
)

export default Header
