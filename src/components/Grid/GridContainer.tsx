import React from 'react'
import useStyles from './style'

export interface ContainerProps {
  children?: any,
  style?: object
}

function GridContainer({ children, style }: ContainerProps) {
  // everything done in percentages
  // children of GridContainer must be GridItem
  const classes = useStyles()
  return (
    <div className={classes.Container} style={style}>
      {children}
    </div>
  )
}

export default GridContainer