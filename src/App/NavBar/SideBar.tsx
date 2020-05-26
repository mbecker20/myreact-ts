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

const grid = makeLayoutGrid(0, 8, 1)

function SideBar({ classes, navProps, onClick, children }: Props): JSX.Element {
  return (
    <animated.div className={classes.SideBar} style={navProps} onClick={onClick}>
      <grid.Container>
        <grid.Item gridPos={[0,0]}>SideBar</grid.Item>
        {Children.map(children, (child, index) => {
          return (
            <grid.Item key={index} gridPos={[index+1,0]}>
              {child}
            </grid.Item>
          )
        })}
      </grid.Container>
    </animated.div>
  )
}

export default SideBar