import React from 'react'
import { PieceComponentProps } from '../types'
import whiteQueenIcon from './pngIcons/whiteQueen.png'
import blackQueenIcon from './pngIcons/blackQueen.png'
import Piece from './Piece'

function Queen({ grid, gridPos, isWhite, onClick, isWhitesTurn, onDragStart }: PieceComponentProps) {
  const imgStyle = { 
    transform: 'scaleY(1)'
  }
  return (
    <Piece
      id='bishop'
      grid={grid}
      gridPos={gridPos}
      img={isWhite ? whiteQueenIcon : blackQueenIcon}
      imgStyle={imgStyle}
      onClick={onClick}
      isWhitesTurn={isWhitesTurn}
      onDragStart={onDragStart}
    />
  );
}

export default Queen