import React, { useState } from 'react'
import NavBar from './NavBar/main'
import SideBarButton from './NavBar/SideBarButton'
import { TilePuzzle, ChessGame } from '../components/all'
import { Router, navigate } from '@reach/router'
import useStyles from './style'
import colors from '../appColors'
import Homepage from './Homepage'

interface ContentStyle {
  width: string,
  left: number,
}

// set open / close menu size (in pixels)
const closedWidth = 70
const openWidth = 230

const contentStyle = {
  width: `calc(100vw - ${closedWidth}px)`,
  left: closedWidth
}

function App(): JSX.Element {
  const [open, toggle] = useState(false);

  const classes = useStyles({ colors: colors})

  function toggleOpen() {
    toggle(!open)
  }

  return (
    <div>
      <NavBar 
        isOpen={open}
        toggleOpen={toggleOpen}
        openWidth={openWidth}
        closedWidth={closedWidth}
        classes={classes}
      >
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
          openText='TilePuzzle'
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
      </NavBar>
      <Router className={classes.AppContent} style={contentStyle}>
        <Homepage path='/myreact-ts' />
        <TilePuzzle path='/myreact-ts/tilepuzzle' />
        <ChessGame path='/myreact-ts/chess' />
      </Router>
    </div>
  )
}

export default App
