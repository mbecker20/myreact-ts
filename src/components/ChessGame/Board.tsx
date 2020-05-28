import React, {useState} from 'react'
import makeLayoutGrid from '../Grid/main'
import { ChessBoard, Piece } from './types'
import BoardTile from './BoardTile'
import { renderWhitePieces, renderBlackPieces } from './pieces/RenderPieces'
import HighlightedSquare from './HighlightedSquare'
import { movePiece } from './helpers'

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
  return (
    <grid.Container style={boardContainerStyle}>
      {chessBoard.boardGrid.map((row, i) => {
        return row.map((pieceID, j) => {
          return (
            <BoardTile key={i*8 + j} grid={grid} gridPos={[i,j]}/>
          )
        })
      }).flat()}
      {renderWhitePieces(chessBoard, grid, numClicks, setNumClicks)}
      {renderBlackPieces(chessBoard, grid, numClicks, setNumClicks)}
      {chessBoard.highlightedSquares.map((square, i) => {
        const movingPiece = chessBoard.highlightingPiece as Piece
        function innerMovePiece() {
          movePiece(chessBoard, movingPiece, square, movingPiece.isWhite)
          setNumClicks(numClicks + 1)
        }
        return (
          <HighlightedSquare key={movingPiece.ID + i} grid={grid} gridPos={square} onClick={innerMovePiece}/>
        )
      })}
    </grid.Container>
  )
}

export default Board