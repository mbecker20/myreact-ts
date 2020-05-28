import React from 'react';
import { PieceComponentProps } from '../types'

function Bishop({ grid, gridPos, isWhite}: PieceComponentProps) {
  return (
    <grid.Item gridPos={gridPos}>
      B
    </grid.Item>
  );
}

export default Bishop;