import React from 'react'
import { useSpring, animated } from 'react-spring'

function GridItem({ gridPos, onComplete, grid, classes, children, style }) {
  // moves item toward gridPos
  const springStyle = useSpring({
    left: grid[gridPos[0]][gridPos[1]][0],
    top: grid[gridPos[0]][gridPos[1]][1],
  })
  
  return (
    <animated.div 
      className={classes.GridItem} 
      style={Object.assign(springStyle, style)}
    >
      {children}
    </animated.div>
  )
}

export default GridItem