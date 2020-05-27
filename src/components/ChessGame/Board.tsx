import React from 'react'
import makeLayoutGrid from '../Grid/main'
import { BoardGrid, BoardPos } from './types'
import colors from '../../appColors'

interface BoardProps {
  boardGrid: BoardGrid
}

interface BoardTileProps {
  gridPos: BoardPos,
  pieceID: string
}

interface TileStyle {
  backgroundColor: string
}

const whiteTileStyle: TileStyle = {
  backgroundColor: colors.primary
}

const blackTileStyle: TileStyle = {
  backgroundColor: colors.secondary
}

const grid = makeLayoutGrid(0, 8, 8)

function BoardTile({ gridPos, pieceID }: BoardTileProps) {
  const isWhite = ((gridPos[0] + gridPos[1]) % 2 === 0)
  return (
    <grid.Item 
      gridPos={gridPos}
      style={isWhite ? whiteTileStyle : blackTileStyle}
    >
      {pieceID}
    </grid.Item>
  )
}

function Board({ boardGrid }: BoardProps) {
  return (
    <grid.Container>
      {boardGrid.map((row, i) => {
        row.map((pieceID, j) => {
          return (
            <BoardTile gridPos={[i,j]} pieceID={pieceID}/>
          )
        })
      })}
    </grid.Container>
  )
}

export default Board