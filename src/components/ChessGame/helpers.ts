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

function makePiece(ID: PieceID, position: BoardPos): Piece {
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
    Component: component
  }
}

function makePieces(isWhite: boolean): Piece[] {
  const backRank = isWhite ? 7 : 0
  const pawnRank = isWhite ? 6 : 1
  let pieces = [
    makePiece('K', [backRank, 4]),
    makePiece('Q', [backRank, 3]),
    makePiece('R0', [backRank, 0]),
    makePiece('R7', [backRank, 7]),
    makePiece('N1', [backRank, 1]),
    makePiece('N6', [backRank, 6]),
    makePiece('B2', [backRank, 2]),
    makePiece('B5', [backRank, 5]),
  ]
  for(var i = 0; i < 8; i++) {
    pieces.push(makePiece('P'+i, [pawnRank, i]))
  }
  return pieces
}

export function makeChessBoard(): ChessBoard {
  return {
    boardGrid: makeBoardGrid(),
    moveList: [],
    whitePieces: makePieces(true),
    blackPieces: makePieces(false),
  }
}