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
  onSideBarClick: () => void
}

function NavBar({ classes, navProps, onSideBarClick }: Props): JSX.Element {
  const topText: string = 'Top Bar'
  const sideText: string = 'Side Bar'
  return (
    <React.Fragment>
      <TopBar classes={classes} text={topText}/>
      <SideBar classes={classes} navProps={navProps} text={sideText} onClick={onSideBarClick} />
    </React.Fragment>
  )
}

export default NavBar