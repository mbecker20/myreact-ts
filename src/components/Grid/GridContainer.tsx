import React from 'react'
import useStyles from './style'
import { ContainerProps } from './types'
import { animated } from 'react-spring'

function GridContainer({ children, style }: ContainerProps) {
  // everything done in percentages
  // children of GridContainer must be GridItem
  const classes = useStyles()
  return (
    <animated.div className={classes.Container} style={style}>
      {children}
    </animated.div>
  )
}

export default GridContainer