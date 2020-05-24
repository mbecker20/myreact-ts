import React from 'react'
import { useSpring, animated } from 'react-spring'

interface Props {
  gridPos: [number, number],
  grid: string[][]
}

function GridItem({ gridPos, grid, className, children, style }) {
  // moves item toward gridPos
  const springStyle = useSpring({
    left: grid[gridPos[0]][gridPos[1]][0],
    top: grid[gridPos[0]][gridPos[1]][1],
  })
  
  return (
    <animated.div 
      className={className} 
      style={Object.assign(springStyle, style)}
    >
      {children}
    </animated.div>
  )
}

export default GridItem