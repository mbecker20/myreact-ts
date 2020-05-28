import React from 'react';
import { PieceComponentProps } from '../types'

function Queen({ grid, gridPos, isWhite}: PieceComponentProps) {
  return (
    <grid.Item gridPos={gridPos}>
      Q
    </grid.Item>
  );
}

export default Queen;