import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

interface Props {
  openWidth: number,
  closedWidth: number,
}

const topText = 'My React'

function NavBar({ openWidth, closedWidth }: Props): JSX.Element {
  return (
    <React.Fragment>
      <TopBar text={topText}/>
      <SideBar
        openWidth={openWidth}
        closedWidth={closedWidth}
      />
    </React.Fragment>
  )
}

export default NavBar