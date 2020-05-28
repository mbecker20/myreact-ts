import React from 'react'
import { ChessBoard } from '../types'
import { LayoutGrid } from '../../Grid/types';

interface Props {
  chessBoard: ChessBoard,
  grid: LayoutGrid
}

export function RenderWhitePieces({ chessBoard, grid }: Props) {
  return (
    chessBoard.whitePieces.map((piece) => {
      return (
        <piece.Component grid={grid} gridPos={piece.position} isWhite={true}/>
      )
    })
  );
}

export function RenderBlackPieces({ chessBoard, grid }: Props) {
  return (
    chessBoard.whitePieces.map((piece) => {
      return (
        <piece.Component grid={grid} gridPos={piece.position} isWhite={true}/>
      )
    })
  );
}
