import React from 'react'
import useJSS from '../style'
import colors from '../../appColors'

interface Props {
  text: string
}

function TopBar({ text }: Props) {
  const classes = useJSS(colors)
  return (
    <div className={classes.TopBar}>
      {text}
    </div>
  )
}

export default TopBar