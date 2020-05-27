import React from 'react'
import useStyles from './style'
import Board from './Board'
import { RouteComponentProps } from '@reach/router'
import colors from '../../appColors'

function ChessGame(props: RouteComponentProps) {
  const classes = useStyles({ colors: colors})
  return (
    <div className={classes.Bounder}>
      <Board />
    </div>
  )
}

export default ChessGame