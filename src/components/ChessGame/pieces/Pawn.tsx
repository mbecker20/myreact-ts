import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whitePawnIcon from './pngIcons/whitePawn.png'
import blackPawnIcon from './pngIcons/blackPawn.png'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Pawn({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const springStyle = useSpring({ 
    transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)',
    config: {
      tension: 80,
      mass: 2,
      friction: 25
    } 
  })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  const imgStyle = { 
    transform: 'scaleX(0.6) scaleY(1)'
  }
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whitePawnIcon : blackPawnIcon}
        style={imgStyle}
        alt='rook icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Pawn