import React, {useState} from 'react'
import NavBar from './NavBar/main'
import { TilePuzzle } from '../components/all'
import useStyles from './style'
import { useSpring, animated } from 'react-spring'
import colors from '../appColors'

const closedWidth = 70
const openWidth = 230

function App(): JSX.Element {
  const [open, toggle] = useState(false);

  const classes = useStyles({ colors: colors})

  const navProps = useSpring({ width: open ? openWidth : closedWidth })
  const contentSpring = useSpring({ 
    width: open ? `calc(100vw - ${openWidth}px)` : `calc(100vw - ${closedWidth}px)`
  })

  function onSideBarClick() {
    /*
    if (navProps.width.done) {
      toggle(!open)
    }
    */
    toggle(!open)
  }

  return (
    <div>
      <NavBar classes={classes} navProps={navProps} onSideBarClick={onSideBarClick} />
      <animated.div className={classes.AppContent} style={{
        left: navProps.width,
        ...contentSpring
      }}>
        <TilePuzzle />
      </animated.div>
    </div>
  )
}

export default App
