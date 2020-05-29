import React from 'react';
import { PieceComponentProps } from '../types'
import whiteBishopIcon from './pngIcons/whiteBishop.png'
import blackBishopIcon from './pngIcons/blackBishop.png'
import Piece from './Piece'

function Bishop({ grid, gridPos, isWhite, onPointerDown, isWhitesTurn }: PieceComponentProps) {
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
      onPointerDown={onPointerDown}
      isWhitesTurn={isWhitesTurn}
    />
  )
}

export default Bishop;