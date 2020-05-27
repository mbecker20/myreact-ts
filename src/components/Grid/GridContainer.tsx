import React from 'react'
import useStyles from './style'
import { ContainerProps } from './types'

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