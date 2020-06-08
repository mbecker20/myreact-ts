import React from 'react'
import makeLayoutGrid from '../Grid/main'
import { ChessBoard } from './types'
import BoardTile from './BoardTile'
import { renderWhitePieces, renderBlackPieces } from './pieces/RenderPieces'
import { renderPossibleMoves, renderSpecialPossibleMoves } from './RenderPossibleMoves'
import { renderHighlightedTiles } from './renderHighlightedTiles'
import { useSpring } from 'react-spring'

interface BoardProps {
  chessBoard: ChessBoard,
  reRender: () => void
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

function Board({ chessBoard, reRender }: BoardProps) {
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
            <BoardTile key={i*8 + j} grid={grid} gridPos={[i,j]}/>
          )
        })
      }).flat()}
      {renderHighlightedTiles(chessBoard, grid)}
      {renderWhitePieces(chessBoard, grid, reRender)}
      {renderBlackPieces(chessBoard, grid, reRender)}
      {renderPossibleMoves(chessBoard, grid, reRender)}
      {renderSpecialPossibleMoves(chessBoard, grid, reRender)}
    </grid.Container>
  )
}

export default Board