import React from 'react'
import { BoardPos } from './types'
import { LayoutGrid } from '../Grid/types'
import { useSpring } from 'react-spring'

interface BoardTileProps {
  grid: LayoutGrid,
  gridPos: BoardPos,
  isHighlighted: boolean,
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

function BoardTile({ grid, gridPos, isHighlighted }: BoardTileProps) {
  const isWhite = ((gridPos[0] + gridPos[1]) % 2 === 0)
  const baseStyle = isWhite ? whiteTileStyle : blackTileStyle
  const springStyle = Object.assign(useSpring({
    border: isHighlighted ? '#ff0000' : baseStyle.backgroundColor
  }), baseStyle)
  return (
    <grid.Item 
      gridPos={gridPos}
      style={springStyle}
    />
  )
}

export default BoardTile