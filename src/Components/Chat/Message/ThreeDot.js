import React, { Fragment } from 'react'

const ThreeDot = ()=>{

  return(
    <Fragment>
      <span id="action_menu_btn">
        <i className="fas fa-ellipsis-v"></i>
      </span>
      <div className="action_menu">
        <ul>
          <li><i className="fas fa-user-circle"></i> View profile</li>
          <li><i className="fas fa-users"></i> Add to close friends</li>
          <li><i className="fas fa-plus"></i> Add to group</li>
          <li><i className="fas fa-ban"></i> Block</li>
        </ul>
      </div>
    </Fragment>

  )
}

export default ThreeDot
