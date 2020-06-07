import React from 'react'
import { PieceComponentProps } from '../types'
import whiteRookIcon from './pngIcons/whiteRook.png'
import blackRookIcon from './pngIcons/blackRook.png'
import Piece from './Piece'

function Rook({ grid, gridPos, isWhite, onClick, isWhitesTurn, onDragStart }: PieceComponentProps) {
  const imgStyle = { 
    transform: 'scaleX(0.6) scaleY(1)' 
  }
  return (
    <Piece
      id='rook'
      grid={grid}
      gridPos={gridPos}
      img={isWhite ? whiteRookIcon : blackRookIcon}
      imgStyle={imgStyle}
      onClick={onClick}
      isWhitesTurn={isWhitesTurn}
      onDragStart={onDragStart}
    />
  );
}

export default Rook