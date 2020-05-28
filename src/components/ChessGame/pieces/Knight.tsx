import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteKnightIcon from './icons/whiteKnight.svg'
import blackKnightIcon from './icons/blackKnight.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Knight({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
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
    transform: 'scaleX(1) scaleY(0.98)'
  }
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteKnightIcon : blackKnightIcon}
        style={imgStyle}
        alt='knight icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Knight