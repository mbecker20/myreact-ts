import React from 'react'
import { PieceComponentProps } from '../types'
import whiteKnightIcon from './pngIcons/whiteKnight.png'
import blackKnightIcon from './pngIcons/blackKnight.png'
import Piece from './Piece'

function Knight({ grid, gridPos, isWhite, onPointerDown, isWhitesTurn }: PieceComponentProps) {
  const imgStyle = { 
    transform: 'scaleX(0.8) scaleY(1)'
  }
  return (
    <Piece
      id='knight'
      grid={grid}
      gridPos={gridPos}
      img={isWhite ? whiteKnightIcon : blackKnightIcon}
      imgStyle={imgStyle}
      onPointerDown={onPointerDown}
      isWhitesTurn={isWhitesTurn}
    />
  );
}

export default Knight