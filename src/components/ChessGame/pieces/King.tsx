import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle } from './pieceStyle';
import whiteKingIcon from './pngIcons/whiteKing.png'
import blackKingIcon from './pngIcons/blackKing.png'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function King({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
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
    transform: 'scaleX(0.8) scaleY(1)'
  }
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={isWhite ? whiteKingIcon : blackKingIcon}
        style={imgStyle}
        alt='king icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default King