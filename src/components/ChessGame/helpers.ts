import { makeGrid } from '../../helpers/vecFuncs'
import { ChessBoard, Piece, PieceID, BoardPos, BoardGrid } from './types'
import * as pieces from './pieces/all'

const ranks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function makeBoardGrid(): BoardGrid {
  return makeGrid(8, 8, (i, j) => {
    if (i === 0) { // black back rank
      if ( j === 0 || j === 7) { // black rooks
        return 'BR' + ranks[j]
      } else if ( j === 1 || j === 6 ) { // black knights
        return 'BN' + ranks[j]
      } else if ( j === 2 || j === 5 ) { // black bishops
        return 'BB' + ranks[j]
      } else if ( j === 3 ) { // black queen
        return 'BQ'
      } else if ( j === 4 ) { // black king
        return 'BK'
      }
    } else if ( i === 7) { // white back rank
      if ( j === 0 || j === 7) { // black rooks
        return 'WR' + ranks[j]
      } else if ( j === 1 || j === 6 ) { // black knights
        return 'WN' + ranks[j]
      } else if ( j === 2 || j === 5 ) { // black bishops
        return 'WB' + ranks[j]
      } else if ( j === 3 ) { // black queen
        return 'WQ'
      } else if ( j === 4 ) { // black king
        return 'WK'
      }
    } else if ( i === 1 ) { // black 2nd rank (pawns)
      return 'BP' + ranks[j]
    } else if ( i === 6 ) { // white 2nd rank
      return 'WP' + ranks[j]
    } else { // unoccupied
      return 'E'
    }
  })
}

function showPossiblePawnMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const step = isWhite ? -1 : 1
  const startingRank = isWhite ? 6 : 1
  const otherColor = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  if (chessBoard.boardGrid[boardPos[0] + step][boardPos[1]] === 'E') {
    possibleMoves.push([boardPos[0] + step, boardPos[1]])
  }
  if (boardPos[1] + 1 > 7 && chessBoard.boardGrid[boardPos[0] + step][boardPos[1] + 1][0] === otherColor) {
    possibleMoves.push([boardPos[0] + step, boardPos[1] + 1])
  }
  if (boardPos[1] - 1 > -1 && chessBoard.boardGrid[boardPos[0] + step][boardPos[1] - 1][0] === otherColor) {
    possibleMoves.push([boardPos[0] + step, boardPos[1] - 1])
  }
  if (boardPos[0] === startingRank) { // pawn can move 2
    if (chessBoard.boardGrid[boardPos[0] + 2*step][boardPos[1]] === 'E') {
      possibleMoves.push([boardPos[0] + 2*step, boardPos[1]])
    }
  }
  chessBoard.highlightedSquares = possibleMoves
}

function showPossibleKingMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  
}

function showPossibleQueenMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  
}

function showPossibleRookMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  
}

function showPossibleBishopMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  
}

function showPossibleKnightMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  
}

function showPossibleMoves(chessBoard: ChessBoard, index: number, isWhite: boolean) {
  console.log('showing possible')
  const piecesKey = isWhite ? 'whitePieces' : 'blackPieces'
  const ID = chessBoard[piecesKey][index].ID
  const boardPos = chessBoard[piecesKey][index].position
  if (ID[0] === 'P') {
    showPossiblePawnMoves(chessBoard, boardPos, isWhite)
  } else if (ID[0] === 'K') {
    showPossibleKingMoves(chessBoard, boardPos, isWhite)
  } else if (ID[0] === 'Q') {
    showPossibleQueenMoves(chessBoard, boardPos, isWhite)
  } else if (ID[0] === 'R') {
    showPossibleRookMoves(chessBoard, boardPos, isWhite)
  } else if (ID[0] === 'B') {
    showPossibleBishopMoves(chessBoard, boardPos, isWhite)
  } else if (ID[0] === 'N') {
    showPossibleKnightMoves(chessBoard, boardPos, isWhite)
  }
}

function makePiece(chessBoard: ChessBoard, ID: PieceID, index: number, position: BoardPos, isWhite: boolean): Piece {
  let component = pieces.Pawn
  if (ID[0] === 'K') {
    component = pieces.King
  } else if (ID[0] === 'Q') {
    component = pieces.Queen
  } else if (ID[0] === 'R') {
    component = pieces.Rook
  } else if (ID[0] === 'B') {
    component = pieces.Bishop
  } else if (ID[0] === 'N') {
    component = pieces.Knight
  }
  return {
    ID: ID,
    position: position,
    isAlive: true,
    Component: component,
    onClick: () => {
      showPossibleMoves(chessBoard, index, isWhite)
    }
  }
}

function makePieces(chessBoard: ChessBoard, isWhite: boolean): Piece[] {
  const backRank = isWhite ? 7 : 0
  const pawnRank = isWhite ? 6 : 1
  let pieces = [
    makePiece(chessBoard, 'K', 0, [backRank, 4], isWhite),
    makePiece(chessBoard, 'Q', 1, [backRank, 3], isWhite),
    makePiece(chessBoard, 'R0', 2, [backRank, 0], isWhite),
    makePiece(chessBoard, 'R7', 3, [backRank, 7], isWhite),
    makePiece(chessBoard, 'N1', 4, [backRank, 1], isWhite),
    makePiece(chessBoard, 'N6', 5, [backRank, 6], isWhite),
    makePiece(chessBoard, 'B2', 6, [backRank, 2], isWhite),
    makePiece(chessBoard, 'B5', 7, [backRank, 5], isWhite),
  ]
  for(var i = 0; i < 8; i++) {
    pieces.push(makePiece(chessBoard, 'P'+i, 8+i, [pawnRank, i], isWhite))
  }
  return pieces
}

export function movePiece(chessBoard: ChessBoard, piece: Piece, target: BoardPos) {
  chessBoard.boardGrid[target[0]][target[1]] = chessBoard.boardGrid[piece.position[0]][piece.position[0]]
  chessBoard.boardGrid[piece.position[0]][piece.position[0]] = 'E'
  piece.position = target
  chessBoard.highlightedSquares = []
  // need to add to move list
}

export function makeChessBoard(): ChessBoard {
  let chessBoard: ChessBoard = {
    boardGrid: makeBoardGrid(),
    moveList: [],
    highlightedSquares: [],
    whitePieces: [],
    blackPieces: [],
    highlightingPiece: undefined,
  }
  chessBoard.whitePieces = makePieces(chessBoard, true)
  chessBoard.blackPieces = makePieces(chessBoard, false)
  return chessBoard
}