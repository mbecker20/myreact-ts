import React from 'react'
import useStyles from './style'

interface AbsItemProps {
  gridPos: [string, string],
  style?: object,
  children?: any,
}

function GridAbsoluteItem({ gridPos, style, children }: AbsItemProps) {
  // gridpos is direct [left, top] percentages
  const classes = useStyles()
  const baseStyle = {
    left: gridPos[0],
    top: gridPos[1],
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

export default GridAbsoluteItem