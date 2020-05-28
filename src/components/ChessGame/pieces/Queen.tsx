import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteQueenIcon from './icons/whiteQueen.svg'
import blackQueenIcon from './icons/blackQueen.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Queen({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const springStyle = useSpring({ transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)' })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteQueenIcon : blackQueenIcon }
        alt='queen icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Queen