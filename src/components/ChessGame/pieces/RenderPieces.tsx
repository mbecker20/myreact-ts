import React from 'react'
import { ChessBoard } from '../types'
import { LayoutGrid } from '../../Grid/types';

export function renderWhitePieces(chessBoard: ChessBoard, grid: LayoutGrid) {
  return (
    chessBoard.whitePieces.map((piece, key) => {
      return (
        <piece.Component key={key} grid={grid} gridPos={piece.position} isWhite={true} onClick={piece.onClick}/>
      )
    })
  )
}

export function renderBlackPieces(chessBoard: ChessBoard, grid: LayoutGrid) {
  return (
    chessBoard.blackPieces.map((piece, key) => {
      return (
        <piece.Component key={key} grid={grid} gridPos={piece.position} isWhite={false} onClick={piece.onClick}/>
      )
    })
  )
}
