import React from 'react'
import { PieceComponentProps } from '../types'
import whitePawnIcon from './pngIcons/whitePawn.png'
import blackPawnIcon from './pngIcons/blackPawn.png'
import Piece from './Piece'

function Pawn({ grid, gridPos, isWhite, onClick, isWhitesTurn, onDragStart }: PieceComponentProps) {
  const imgStyle = { 
    transform: 'scaleX(0.6) scaleY(1)'
  }
  return (
    <Piece
      id='bishop'
      grid={grid}
      gridPos={gridPos}
      img={isWhite ? whitePawnIcon : blackPawnIcon}
      imgStyle={imgStyle}
      onClick={onClick}
      isWhitesTurn={isWhitesTurn}
      onDragStart={onDragStart}
    />
  );
}

export default Pawn