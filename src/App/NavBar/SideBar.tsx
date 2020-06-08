import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import SideBarButton from './SideBarButton'
import colors from '../../appColors';
import useJSS from '../style'
import { navigate } from '@reach/router'

interface Props {
  openWidth: number,
  closedWidth: number,
}

function SideBar({ openWidth, closedWidth }: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  const classes = useJSS(colors)
  const navSpring = useSpring({ width: open ? openWidth : closedWidth })
  function toggleOpen() {
    setOpen(!open)
  }
  return (
    <animated.div className={classes.SideBar} style={navSpring}>
      <SideBarButton 
        isOpen={open}
        openWidth={openWidth}
        closedWidth={closedWidth}
        openText='<'
        closedText='>'
        onClick={toggleOpen}
        style={{ backgroundColor: colors.tertiary }}
      />
      <SideBarButton 
          isOpen={open}
          openWidth={openWidth}
          closedWidth={closedWidth}
          openText='Home'
          closedText='H'
          onClick={() => {
            navigate('/myreact-ts/')
          }}
        />
        <SideBarButton 
          isOpen={open}
          openWidth={openWidth}
          closedWidth={closedWidth}
          openText='Tile Puzzle'
          closedText='T'
          onClick={() => {
            navigate('/myreact-ts/tilepuzzle')
          }}
        />
        <SideBarButton 
          isOpen={open}
          openWidth={openWidth}
          closedWidth={closedWidth}
          openText='Chess'
          closedText='C'
          onClick={() => {
            navigate('/myreact-ts/chess')
          }}
        />
    </animated.div>
  )
}

export default SideBar