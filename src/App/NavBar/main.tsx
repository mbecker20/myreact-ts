import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

interface Classes {
  TopBar: any,
  SideBar: any
}

interface Props {
  isOpen: boolean,
  toggleOpen: () => void,
  openWidth: number,
  closedWidth: number,
  classes: Classes,
  children: any
}

const topText = 'My React'

function NavBar({ isOpen, toggleOpen, openWidth, closedWidth, classes, children }: Props): JSX.Element {
  return (
    <React.Fragment>
      <TopBar classes={classes} text={topText}/>
      <SideBar
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        openWidth={openWidth}
        closedWidth={closedWidth}
        classes={classes}
        children={children}
      />
    </React.Fragment>
  )
}

export default NavBar