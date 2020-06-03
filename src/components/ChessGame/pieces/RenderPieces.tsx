import React from 'react'
import { ChessBoard } from '../types'
import { LayoutGrid } from '../../Grid/types';

export function renderWhitePieces(chessBoard: ChessBoard, grid: LayoutGrid, state: number, setState: (state: number) => void) {
  return (
    Object.keys(chessBoard.aliveWhitePieces).map((ID) => {
      const piece = chessBoard.aliveWhitePieces[ID]
      function onClick() {
        piece.onClick()
        chessBoard.highlightingPiece = piece
        setState(state + 1)
      }
      return (
        <piece.Component key={ID} grid={grid} gridPos={piece.position} isWhite={true} onPointerDown={onClick} isWhitesTurn={chessBoard.isWhitesTurn}/>
      )
    })
  )
}

export function renderBlackPieces(chessBoard: ChessBoard, grid: LayoutGrid, state: number, setState: (state: number) => void) {
  return (
    Object.keys(chessBoard.aliveBlackPieces).map((ID) => {
      const piece = chessBoard.aliveBlackPieces[ID]
      function onClick() {
        piece.onClick()
        chessBoard.highlightingPiece = piece
        setState(state + 1)
      }
      return (
        <piece.Component key={ID} grid={grid} gridPos={piece.position} isWhite={false} onPointerDown={onClick} isWhitesTurn={chessBoard.isWhitesTurn}/>
      )
    })
  )
}
