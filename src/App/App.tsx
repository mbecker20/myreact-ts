import React from 'react'
import NavBar from './NavBar/main'
import { TilePuzzle, ChessGame } from '../components/all'
import { Router } from '@reach/router'
import useJSS from './style'
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

function App() {
  const classes = useJSS(colors)
  return (
    <div>
      <NavBar
        openWidth={openWidth}
        closedWidth={closedWidth}
      />
      <Router className={classes.AppContent} style={contentStyle}>
        <Homepage path='/myreact-ts' />
        <TilePuzzle path='/myreact-ts/tilepuzzle' />
        <ChessGame path='/myreact-ts/chess' />
      </Router>
    </div>
  )
}

export default App
