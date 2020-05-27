import React from 'react'
import { BoardPos } from './types'
import colors from '../../appColors'
import { LayoutGrid } from '../Grid/types'

interface BoardTileProps {
  grid: LayoutGrid,
  gridPos: BoardPos,
  pieceID: string
}

interface TileStyle {
  backgroundColor: string,
  width: string,
  height: string,
}

const whiteTileStyle: TileStyle = {
  backgroundColor: colors.primary,
  width: '10vmin',
  height: '10vmin',
}

const blackTileStyle: TileStyle = {
  backgroundColor: colors.secondary,
  width: '10vmin',
  height: '10vmin',
}

function BoardTile({ grid, gridPos, pieceID }: BoardTileProps) {
  const isWhite = ((gridPos[0] + gridPos[1]) % 2 === 0)
  return (
    <grid.StaticItem 
      gridPos={gridPos}
      style={isWhite ? whiteTileStyle : blackTileStyle}
    >
      {''}
    </grid.StaticItem>
  )
}

export default BoardTile