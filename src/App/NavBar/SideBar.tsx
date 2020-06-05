import React from 'react';
import { useSpring, animated } from 'react-spring'
import SideBarButton from './SideBarButton'
import colors from '../../appColors';

interface Classes {
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

function SideBar({ isOpen, toggleOpen, openWidth, closedWidth, classes, children }: Props): JSX.Element {
  
  const navSpring = useSpring({ width: isOpen ? openWidth : closedWidth })

  return (
    <animated.div className={classes.SideBar} style={navSpring}>
      <SideBarButton 
        isOpen={isOpen}
        openWidth={openWidth}
        closedWidth={closedWidth}
        openText='<'
        closedText='>'
        onClick={toggleOpen}
        style={{ backgroundColor: colors.tertiary }}
      />
      {children}
    </animated.div>
  )
}

export default SideBar