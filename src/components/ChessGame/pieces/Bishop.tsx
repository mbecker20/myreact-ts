import React from 'react';
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteBishopIcon from './icons/whiteBishop.svg'
import blackBishopIcon from './icons/blackBishop.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Bishop({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const springStyle = useSpring({ transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)' })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteBishopIcon : blackBishopIcon}
        alt='bishop icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Bishop;