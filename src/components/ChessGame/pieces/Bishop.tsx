import React from 'react';
import { PieceComponentProps } from '../types'
import whiteBishopIcon from './pngIcons/whiteBishop.png'
import blackBishopIcon from './pngIcons/blackBishop.png'
import Piece from './Piece'

function Bishop({ grid, gridPos, isWhite, onClick, isWhitesTurn, onDragStart }: PieceComponentProps) {
  const imgStyle = { 
    transform: 'scaleX(1) scaleY(1)'
  }
  return (
    <Piece
      id='bishop'
      grid={grid}
      gridPos={gridPos}
      img={isWhite ? whiteBishopIcon : blackBishopIcon}
      imgStyle={imgStyle}
      onClick={onClick}
      onDragStart={onDragStart}
      isWhitesTurn={isWhitesTurn}
    />
  )
}

export default Bishop;