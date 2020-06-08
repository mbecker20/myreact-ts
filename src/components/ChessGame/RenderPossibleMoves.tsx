import React from 'react'
import { ChessBoard, Piece, SpecialPossibleMove } from './types';
import movePiece from './helpers/movePiece'
import PossibleMove from './PossibleMove';
import { LayoutGrid } from '../Grid/types';

type SetNumClicks = (numClicks: number) => void

export function renderPossibleMoves(chessBoard: ChessBoard, grid: LayoutGrid, numClicks: number, setNumClicks: SetNumClicks) {
  return (
    chessBoard.possibleMoves.map((square, i) => {
      const movingPiece = chessBoard.chosenPiece as Piece
      function innerMovePiece() {
        movePiece(chessBoard, movingPiece, square, movingPiece.isWhite)
        setNumClicks(numClicks + 1)
      }
      return (
        <PossibleMove
          key={movingPiece.ID + i}
          grid={grid}
          gridPos={square}
          onClick={innerMovePiece}
        />
      )
    })
  );
}

export function renderSpecialPossibleMoves(chessBoard: ChessBoard, grid: LayoutGrid, numClicks: number, setNumClicks: SetNumClicks) {
  return (
    chessBoard.specialPossibleMoves.map((square: SpecialPossibleMove, i: number) => {
      const movingPiece = chessBoard.chosenPiece as Piece
      function innerOnClick() {
        square.onClick()
        setNumClicks(numClicks + 1)
      }
      return (
        <PossibleMove key={movingPiece.ID + i} grid={grid} gridPos={square.boardPos} onClick={innerOnClick}/>
      )
    })
  );
}