import React from 'react'
import makeLayoutGrid from '../Grid/main'
import { ChessBoard } from './types'
import BoardTile from './BoardTile'

interface BoardProps {
  chessBoard: ChessBoard
}

interface BoardContainerStyle {
  width: string,
  height: string,
}

const boardContainerStyle: BoardContainerStyle = {
  width: '80vmin',
  height: '80vmin',
}

const grid = makeLayoutGrid(0, 8, 8)

function Board({ chessBoard }: BoardProps) {
  return (
    <grid.Container style={boardContainerStyle}>
      {chessBoard.boardGrid.map((row, i) => {
        return row.map((pieceID, j) => {
          return (
            <BoardTile grid={grid} gridPos={[i,j]}/>
          )
        })
      }).flat()}
      
    </grid.Container>
  )
}

export default Board