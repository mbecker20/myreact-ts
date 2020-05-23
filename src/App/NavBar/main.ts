import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

function NavBar({ classes, navProps, onSideBarClick }) {
  const topText = 'Top Bar'
  const sideText = 'Side Bar'
  return (
    <React.Fragment>
      <TopBar classes={classes} text={topText} />
      <SideBar classes={classes} navProps={navProps} text={sideText} onClick={onSideBarClick} />
    </React.Fragment>
  )
}

export default NavBar