import React from 'react';
import { animated } from 'react-spring'

function SideBar({ classes, navProps, text, onClick }) {
  return (
    <animated.div className={classes.SideBar} style={navProps} onClick={onClick}>
      {text}
    </animated.div>
  )
}

export default SideBar