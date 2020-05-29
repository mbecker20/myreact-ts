import React from 'react'
import { PieceComponentProps } from '../types'
import whiteKingIcon from './pngIcons/whiteKing.png'
import blackKingIcon from './pngIcons/blackKing.png'
import Piece from './Piece'

function King({ grid, gridPos, isWhite, onPointerDown, isWhitesTurn }: PieceComponentProps) {
  const imgStyle = { 
    transform: 'scaleX(0.8) scaleY(1)'
  }
  return (
    <Piece
      id='king'
      grid={grid}
      gridPos={gridPos}
      img={isWhite ? whiteKingIcon : blackKingIcon}
      imgStyle={imgStyle}
      onPointerDown={onPointerDown}
      isWhitesTurn={isWhitesTurn}
    />
  );
}

export default King