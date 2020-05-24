import React from 'react';
import { animated } from 'react-spring'

interface Classes {
  SideBar: any
}

interface Props {
  classes: Classes,
  navProps: object,
  text: string,
  onClick: () => void
}

function SideBar({ classes, navProps, text, onClick }: Props): JSX.Element {
  return (
    <animated.div className={classes.SideBar} style={navProps} onClick={onClick}>
      {text}
    </animated.div>
  )
}

export default SideBar