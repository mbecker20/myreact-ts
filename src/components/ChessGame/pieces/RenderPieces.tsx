import React from 'react'
import { ChessBoard } from '../types'
import { LayoutGrid } from '../../Grid/types';

export function renderWhitePieces(chessBoard: ChessBoard, grid: LayoutGrid, state: number, setState: (state: number) => void) {
  return (
    chessBoard.whitePieces.map((piece, key) => {
      function onClick() {
        piece.onClick()
        chessBoard.highlightingPiece = piece
        setState(state + 1)
      }
      return (
        <piece.Component key={key} grid={grid} gridPos={piece.position} isWhite={true} onClick={onClick}/>
      )
    })
  )
}

export function renderBlackPieces(chessBoard: ChessBoard, grid: LayoutGrid, state: number, setState: (state: number) => void) {
  return (
    chessBoard.blackPieces.map((piece, key) => {
      function onClick() {
        piece.onClick()
        chessBoard.highlightingPiece = piece
        setState(state + 1)
      }
      return (
        <piece.Component key={key} grid={grid} gridPos={piece.position} isWhite={false} onClick={onClick}/>
      )
    })
  )
}
