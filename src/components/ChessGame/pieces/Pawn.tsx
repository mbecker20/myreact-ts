import React from 'react'
import { PieceComponentProps } from '../types'

function Pawn({ grid, gridPos, isWhite}: PieceComponentProps) {
  return (
    <grid.Item gridPos={gridPos}>
      P
    </grid.Item>
  );
}

export default Pawn;