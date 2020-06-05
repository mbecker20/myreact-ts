import React from 'react';
import { BasePieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Piece({ id, grid, gridPos, img, imgStyle, onPointerDown, isWhitesTurn }: BasePieceComponentProps) {
  const classes = useStyles()
  const springStyle = useSpring({ 
    transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(0deg)',
    config: {
      tension: 80,
      mass: 2,
      friction: 25
    }
  })
  const gridPieceSpringStyle = Object.assign(springStyle, gridPieceStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={img}
        style={imgStyle}
        alt={id}
        onPointerDown={onPointerDown}
      />
    </grid.Item>
  );
}

export default Piece;