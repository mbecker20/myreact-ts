import React, {useState} from 'react'
import NavBar from './NavBar/main'
import { TilePuzzle } from '../components/all'
import { useSpring, animated } from 'react-spring'
import { Router, Link } from '@reach/router'
import useStyles from './style'
import colors from '../appColors'

const closedWidth = 70
const openWidth = 230

const AnimatedRouter = animated(Router)

function App(): JSX.Element {
  const [open, toggle] = useState(false);

  const classes = useStyles({ colors: colors})

  const navProps = useSpring({ width: open ? openWidth : closedWidth })
  const contentSpring = useSpring({ 
    width: open ? `calc(100vw - ${openWidth}px)` : `calc(100vw - ${closedWidth}px)`
  })

  function onSideBarClick() {
    toggle(!open)
  }

  return (
    <div>
      <NavBar classes={classes} navProps={navProps} onSideBarClick={onSideBarClick}>
        <Link to='/tilepuzzle'>Tile Puzzle</Link>
      </NavBar>
      <AnimatedRouter className={classes.AppContent} style={{
        left: navProps.width,
        ...contentSpring
      }}>
        <TilePuzzle path='/tilepuzzle'/>
      </AnimatedRouter>
    </div>
  )
}

export default App
