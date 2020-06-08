import React from 'react'
import { BoardPos } from './types'
import { LayoutGrid } from '../Grid/types'

interface BoardTileProps {
  grid: LayoutGrid,
  gridPos: BoardPos,
}

interface TileStyle {
  backgroundColor: string,
  width: string,
  height: string,
}

const whiteTileStyle: TileStyle = {
  backgroundColor: '#cc8666',
  width: '10vmin',
  height: '10vmin',
}

const blackTileStyle: TileStyle = {
  backgroundColor: '#82462b',
  width: '10vmin',
  height: '10vmin',
}

function BoardTile({ grid, gridPos }: BoardTileProps) {
  const isWhite = ((gridPos[0] + gridPos[1]) % 2 === 0)
  const baseStyle = isWhite ? whiteTileStyle : blackTileStyle
  return (
    <grid.Item 
      gridPos={gridPos}
      style={baseStyle}
    />
  )
}

export default BoardTile