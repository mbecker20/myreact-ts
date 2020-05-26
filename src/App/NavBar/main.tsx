import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

interface Classes {
  TopBar: any,
  SideBar: any
}

interface Props {
  classes: Classes,
  navProps: object,
  onSideBarClick: () => void,
  children: any
}

function NavBar({ classes, navProps, onSideBarClick, children }: Props): JSX.Element {
  const topText = 'Top Bar'
  const sideText = 'Side Bar'
  return (
    <React.Fragment>
      <TopBar classes={classes} text={topText}/>
      <SideBar 
        classes={classes} 
        navProps={navProps} 
        text={sideText} 
        onClick={onSideBarClick} 
        children={children}
      />
    </React.Fragment>
  )
}

export default NavBar