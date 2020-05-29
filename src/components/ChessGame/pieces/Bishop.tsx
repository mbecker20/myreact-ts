import React from 'react';
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteBishopIcon from './pngIcons/whiteBishop.png'
import blackBishopIcon from './pngIcons/blackBishop.png'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Bishop({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
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
    transform: 'scaleX(1) scaleY(1)'
  }
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteBishopIcon : blackBishopIcon}
        style={imgStyle}
        alt='bishop icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Bishop;