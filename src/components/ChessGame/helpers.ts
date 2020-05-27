import { makeGrid } from '../../helpers/vecFuncs'
import { ChessBoard, Piece, BoardPos, BoardGrid } from './types'

function makeBoardGrid(): BoardGrid {
  return makeGrid(8, 8, (i, j) => {
    if (i === 0) { // black back rank
      if ( j === 0 || j === 7) { // black rooks
        return 'BR' + j
      } else if ( j === 1 || j === 6 ) { // black knights
        return 'BN' + j
      } else if ( j === 2 || j === 5 ) { // black bishops
        return 'BB' + j
      } else if ( j === 3 ) { // black queen
        return 'BQ'
      } else if ( j === 4 ) { // black king
        return 'BK'
      }
    } else if ( i === 7) { // white back rank
      if ( j === 0 || j === 7) { // black rooks
        return 'WR' + j
      } else if ( j === 1 || j === 6 ) { // black knights
        return 'WN' + j
      } else if ( j === 2 || j === 5 ) { // black bishops
        return 'WB' + j
      } else if ( j === 3 ) { // black queen
        return 'WQ'
      } else if ( j === 4 ) { // black king
        return 'WK'
      }
    } else if ( i === 2 ) { // black 2nd rank (pawns)
      return 'BP' + j
    } else if ( i === 6 ) { // white 2nd rank
      return 'WP' + j
    } else { // unoccupied
      return 'E'
    }
  })
}

function makePiece(ID: string, position: BoardPos): Piece {
  return {
    ID: ID,
    position: position,
    isAlive: true,
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
    makePiece('R5', [backRank, 6]),
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
    aliveWhitePieces: makePieces(true),
    aliveBlackPieces: makePieces(false),
    deadWhitePieces: [],
    deadBlackPieces: [],
  }
}