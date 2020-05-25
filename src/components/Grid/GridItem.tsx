import React from 'react'
import { useSpring, animated } from 'react-spring'
import useStyles from './style'

export interface ItemProps {
  gridPos: [number, number],
  grid: string[][],
  style?: object,
  children?: any
}

function GridItem({ gridPos, grid, style, children }: ItemProps) {
  // moves item toward gridPos
  const classes = useStyles()
  const springStyle = useSpring({
    left: grid[gridPos[0]][gridPos[1]][0],
    top: grid[gridPos[0]][gridPos[1]][1],
  })
  
  return (
    <animated.div 
      className={classes.Item} 
      style={Object.assign(springStyle, style)}
    >
      {children}
    </animated.div>
  )
}

export default GridItem