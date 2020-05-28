import React from 'react'
import { PieceComponentProps } from '../types'

function Knight({ grid, gridPos, isWhite}: PieceComponentProps) {
  return (
    <grid.Item gridPos={gridPos}>
      N
    </grid.Item>
  );
}

export default Knight