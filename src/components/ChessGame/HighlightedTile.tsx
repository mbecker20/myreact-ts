import React from 'react'
import { LayoutGrid } from '../Grid/types'
import { BoardPos } from './types';

interface Props {
  grid: LayoutGrid
  gridPos: BoardPos
}

function HighlightedTile({ grid, gridPos }: Props) {
  return (
    <grid.StaticItem gridPos={gridPos} style={{
      width: '10vmin',
      height: '10vmin',
      borderStyle: 'solid',
      borderColor: 'black',
    }}/>
  );
}

export default HighlightedTile