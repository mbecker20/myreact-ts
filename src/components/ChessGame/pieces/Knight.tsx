import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteKnightIcon from './icons/whiteKnight.svg'
import blackKnightIcon from './icons/blackKnight.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Knight({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const springStyle = useSpring({ transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)' })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteKnightIcon : blackKnightIcon}
        alt='knight icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Knight