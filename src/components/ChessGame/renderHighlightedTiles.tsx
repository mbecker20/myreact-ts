import React from 'react'
import { ChessBoard } from './types'
import HighlightedTile from './HighlightedTile'
import { LayoutGrid } from '../Grid/types'

export function renderHighlightedTiles(chessBoard: ChessBoard, grid: LayoutGrid) {
  return (
    chessBoard.highlightedTiles.map((gridPos, key) => {
      return (
        <HighlightedTile
          grid={grid}
          gridPos={gridPos}
          key={key}
        />
      )
    })
  )
}