import React from 'react'
import useStyles from './style'
import Board from './Board'
import { RouteComponentProps } from '@reach/router'
import colors from '../../appColors'
import { makeChessBoard } from './helpers'

let chessBoard = makeChessBoard()

function ChessGame(props: RouteComponentProps) {
  const classes = useStyles({ colors: colors})
  return (
    <div className={classes.Bounder}>
      <Board boardGrid={chessBoard.boardGrid}/>
    </div>
  )
}

export default ChessGame