import React, { Children } from 'react';
import { useSpring, animated } from 'react-spring'
import makeLayoutGrid from '../../components/Grid/main'
import SideBarButton from './SideBarButton'
import colors from '../../appColors';

interface Classes {
  SideBar: any
}

interface Props {
  isOpen: boolean,
  toggleOpen: () => void,
  openWidth: number,
  closedWidth: number,
  classes: Classes,
  children: any
}

const grid = makeLayoutGrid(5, 20, 1)

function SideBar({ isOpen, toggleOpen, openWidth, closedWidth, classes, children }: Props): JSX.Element {
  
  const navSpring = useSpring({ width: isOpen ? openWidth : closedWidth })

  return (
    <animated.div className={classes.SideBar} style={navSpring}>
      <grid.Container>
        <grid.Item gridPos={[0,0]}>
          <SideBarButton 
            isOpen={isOpen}
            openWidth={openWidth}
            closedWidth={closedWidth}
            openText='<'
            closedText='>'
            onClick={toggleOpen}
            style={{ backgroundColor: colors.tertiary }}
          />
        </grid.Item>
        {Children.map(children, (child, index) => {
          return (
            <grid.Item key={index} gridPos={[2*index+3,0]}>
              {child}
            </grid.Item>
          )
        })}
      </grid.Container>
    </animated.div>
  )
}

export default SideBar