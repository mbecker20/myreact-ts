import React from 'react'
import { ChessBoard } from '../types'
import { LayoutGrid } from '../../Grid/types';

export function renderWhitePieces(chessBoard: ChessBoard, grid: LayoutGrid) {
  return (
    chessBoard.whitePieces.map((piece) => {
      return (
        <piece.Component grid={grid} gridPos={piece.position} isWhite={true}/>
      )
    })
  );
}

export function renderBlackPieces(chessBoard: ChessBoard, grid: LayoutGrid) {
  return (
    chessBoard.blackPieces.map((piece) => {
      return (
        <piece.Component grid={grid} gridPos={piece.position} isWhite={false}/>
      )
    })
  );
}
