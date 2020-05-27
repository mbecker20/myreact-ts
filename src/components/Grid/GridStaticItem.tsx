import React from 'react'
import useStyles from './style'
import { ItemProps } from './types'

interface BaseStyle {
  top: string,
  left: string,
}

function GridStaticItem({ gridPos, grid, style, children }: ItemProps) {
  // moves item toward gridPos
  const classes = useStyles()
  const baseStyle: BaseStyle = {
    left: grid[gridPos[0]][gridPos[1]][0],
    top: grid[gridPos[0]][gridPos[1]][1],
  }
  
  return (
    <div
      className={classes.Item} 
      style={Object.assign(baseStyle, style)}
    >
      {children}
    </div>
  )
}

export default GridStaticItem