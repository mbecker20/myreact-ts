import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteRookIcon from './icons/whiteRook.svg'
import blackRookIcon from './icons/blackRook.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Rook({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const imgStyle = { transform: 'scaleX(1.1)' }
  const springStyle = useSpring({ transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)' })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteRookIcon : blackRookIcon}
        style={imgStyle}
        alt='rook icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Rook