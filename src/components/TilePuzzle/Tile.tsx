import React from 'react';
import { animated } from 'react-spring'

interface Props {
  classes: any,
  number: number,
  onClick: () => void
}

function Tile({ classes, number, onClick}: Props) {
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