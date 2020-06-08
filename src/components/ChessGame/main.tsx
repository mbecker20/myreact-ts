import React, { useState } from 'react'
import useJSS from './style'
import Board from './Board'
import { RouteComponentProps } from '@reach/router'
import makeChessBoard from './helpers/makeChessBoard'
import NavButtons from './MoveList/NavButtons'

let chessBoard = makeChessBoard()

function ChessGame(props: RouteComponentProps) {
  const [numClicks, setNumClicks] = useState(0)
  const classes = useJSS()
  function reRender() {
    setNumClicks(numClicks + 1)
  }
  return (
    <div className={classes.Bounder}>
      <Board chessBoard={chessBoard} reRender={reRender}/>
      <NavButtons chessBoard={chessBoard} reRender={reRender}/>
    </div>
  )
}

export default ChessGame