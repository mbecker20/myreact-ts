import React, { Children } from 'react';
import { animated } from 'react-spring'
import makeLayoutGrid from '../../components/Grid/main'

interface Classes {
  SideBar: any
}

interface Props {
  classes: Classes,
  navProps: object,
  text: string,
  onClick: () => void,
  children: any
}

function SideBar({ classes, navProps, onClick, children }: Props): JSX.Element {
  return (
    <animated.div className={classes.SideBar} style={navProps} onClick={onClick}>
      {Children.map(children, (child, index) => {

      })}
    </animated.div>
  )
}

export default SideBar