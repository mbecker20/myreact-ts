import React, { useState } from 'react'
import makeLayoutGrid from '../Grid/main'
import { ChessBoard } from './types'
import BoardTile from './BoardTile'
import { renderWhitePieces, renderBlackPieces } from './pieces/RenderPieces'
import { renderPossibleMoves, renderSpecialPossibleMoves } from './RenderPossibleMoves'
import { useSpring } from 'react-spring'

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
  const [numClicks, setNumClicks] = useState(0)
  const springStyle = useSpring({
    transform: chessBoard.isWhitesTurn ? 'scale(1)' : 'scale(1)',
    config: {
      tension: 80,
      mass: 2,
      friction: 25,
    },
  })
  return (
    <grid.Container style={Object.assign(springStyle, boardContainerStyle)}>
      {chessBoard.boardGrid.map((row, i) => {
        return row.map((pieceID, j) => {
          return (
            <BoardTile key={i*8 + j} grid={grid} gridPos={[i,j]} isHighlighted={false}/>
          )
        })
      }).flat()}
      {renderWhitePieces(chessBoard, grid, numClicks, setNumClicks)}
      {renderBlackPieces(chessBoard, grid, numClicks, setNumClicks)}
      {renderPossibleMoves(chessBoard, grid, numClicks, setNumClicks)}
      {renderSpecialPossibleMoves(chessBoard, grid, numClicks, setNumClicks)}
    </grid.Container>
  )
}

export default Board