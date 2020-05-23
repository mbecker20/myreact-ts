import React from 'react';
import { animated } from 'react-spring'

function Tile({ classes, number, onClick}) {
  return (
    <animated.div 
      className={classes.Tile} 
      onClick={onClick}
    >
      {number}
    </animated.div>
  )
}

export default Tile