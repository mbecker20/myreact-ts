import React from 'react'
import { PieceComponentProps } from '../types'

function Rook({ grid, gridPos, isWhite}: PieceComponentProps) {
  return (
    <grid.Item gridPos={gridPos}>
      R
    </grid.Item>
  );
}

export default Rook