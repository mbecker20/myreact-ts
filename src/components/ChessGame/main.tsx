import React from 'react'
import useStyles from './style'
import Board from './Board'
import { RouteComponentProps } from '@reach/router'

function ChessGame(props: RouteComponentProps) {
  const classes = useStyles()
  return (
    <div className={classes.Bounder}>
      <Board />
    </div>
  )
}

export default ChessGame