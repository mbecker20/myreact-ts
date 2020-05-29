import React from 'react'
import { PieceComponentProps } from '../types'
import whitePawnIcon from './pngIcons/whitePawn.png'
import blackPawnIcon from './pngIcons/blackPawn.png'
import Piece from './Piece'

function Pawn({ grid, gridPos, isWhite, onPointerDown, isWhitesTurn }: PieceComponentProps) {
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
      onPointerDown={onPointerDown}
      isWhitesTurn={isWhitesTurn}
    />
  );
}

export default Pawn