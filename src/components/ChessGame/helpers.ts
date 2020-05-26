import { makeGrid } from '../../helpers/vecFuncs'
import { ChessBoard } from './types'

function makeBoardGrid(): string[][] {
  // black rook 
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

export function makeChessBoard(): ChessBoard {
  return {
    boardGrid: makeBoardGrid(),
    moveList: []
  }
}