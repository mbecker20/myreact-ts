import React from 'react';
import { PieceComponentProps } from '../types'

function King({ grid, gridPos, isWhite}: PieceComponentProps) {
  return (
    <grid.Item gridPos={gridPos}>
      K
    </grid.Item>
  );
}

export default King;