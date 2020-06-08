import { makeGrid } from '../../../helpers/vecFuncs'
import { ChessBoard, Piece, KingPiece, PawnPiece, PieceID, BoardPos, BoardGrid, Team } from '../types'
import * as pieces from '../pieces/all'
import showPossibleMoves from './possibleMoves'
import movePiece from './movePiece'
import { copyBoardGrid, copyTeam } from './moveList'

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
    } else if ( i === 1 ) { // black 2nd rank (pawns)
      return 'BP' + j
    } else if ( i === 6 ) { // white 2nd rank
      return 'WP' + j
    } else { // unoccupied
      return 'E'
    }
  })
}

function makePiece(chessBoard: ChessBoard, ID: PieceID, position: BoardPos, isWhite: boolean): Piece {
  let component = pieces.Pawn
  const team = isWhite ? 'W' : 'B'
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
  let piece = {
    position: position,
    Component: component,
    onClick: () => {
      
    },
    isSelected: false,
    isWhite: isWhite,
    ID: ID,
  }
  piece.onClick = function() {
    if (!piece.isSelected) {
      piece.isSelected = true
      chessBoard.chosenPiece = piece
      showPossibleMoves(chessBoard, team + ID, isWhite)
    } else {
      chessBoard.possibleMoves = []
      chessBoard.specialPossibleMoves = []
      chessBoard.chosenPiece = undefined
      piece.isSelected = false
    }
    
  }
  return piece
}

function makePieces(chessBoard: ChessBoard, isWhite: boolean) {
  const backRank = isWhite ? 7 : 0
  const pawnRank = isWhite ? 6 : 1
  const team = isWhite ? 'W' : 'B'
  const enPassantStepBack = isWhite ? 1 : -1
  const aliveOtherPiecesKey = isWhite ? 'aliveBlackPieces' : 'aliveWhitePieces'
  const deadOtherPiecesKey = isWhite ? 'deadBlackPieces' : 'deadWhitePieces'
  let pieces: any = {}
  pieces[team + 'K'] = makePiece(chessBoard, 'K', [backRank, 4], isWhite) as KingPiece
  pieces[team + 'Q'] = makePiece(chessBoard, 'Q', [backRank, 3], isWhite)
  pieces[team + 'R0' ] = makePiece(chessBoard, 'R0', [backRank, 0], isWhite)
  pieces[team + 'R7'] = makePiece(chessBoard, 'R7', [backRank, 7], isWhite)
  pieces[team + 'N1'] = makePiece(chessBoard, 'N1', [backRank, 1], isWhite)
  pieces[team + 'N6'] = makePiece(chessBoard, 'N6', [backRank, 6], isWhite)
  pieces[team + 'B2'] = makePiece(chessBoard, 'B2', [backRank, 2], isWhite)
  pieces[team + 'B5'] = makePiece(chessBoard, 'B5', [backRank, 5], isWhite)
  for(var i = 0; i < 8; i++) {
    let pawn = makePiece(chessBoard, 'P'+i, [pawnRank, i], isWhite) as PawnPiece
    pawn.canEnPassantPos = false
    pawn.canEnPassantNeg = false
    pawn.enPassant = function(target: BoardPos) {
      const capturedID = chessBoard.boardGrid[target[0] + enPassantStepBack][target[1]]
      chessBoard[deadOtherPiecesKey][capturedID] = chessBoard[aliveOtherPiecesKey][capturedID]
      delete chessBoard[aliveOtherPiecesKey][capturedID]
      movePiece(chessBoard, pawn, target, isWhite)
    }
    pieces[team + 'P' + i] = pawn
  }
  pieces[team + 'K'].canCastleShort = true
  pieces[team + 'K'].canCastleLong = true
  pieces[team + 'K'].shortCastle = function() {
    movePiece(chessBoard, pieces[team + 'K'], [backRank, 6], isWhite)
    movePiece(chessBoard, pieces[team + 'R7'], [backRank, 5], isWhite)
    chessBoard.isWhitesTurn = !chessBoard.isWhitesTurn
    chessBoard.specialHighlightedSquares = []
  }
  pieces[team + 'K'].longCastle = function() {
    movePiece(chessBoard, pieces[team + 'K'], [backRank, 2], isWhite)
    movePiece(chessBoard, pieces[team + 'R0'], [backRank, 3], isWhite)
    chessBoard.isWhitesTurn = !chessBoard.isWhitesTurn
    chessBoard.specialHighlightedSquares = []
  }
  return pieces as Team
}

function makeChessBoard(): ChessBoard {
  let chessBoard: ChessBoard = {
    isWhitesTurn: true,
    boardGrid: makeBoardGrid(),
    moveList: [],
    possibleMoves: [],
    specialPossibleMoves: [],
    highlightedTiles: [],
    aliveWhitePieces: {},
    deadWhitePieces: {},
    aliveBlackPieces: {},
    deadBlackPieces: {},
    currentMove: 0,
    chosenPiece: undefined,
  }
  chessBoard.aliveWhitePieces = makePieces(chessBoard, true)
  chessBoard.aliveBlackPieces = makePieces(chessBoard, false)
  chessBoard.moveList[0] = {
    boardGrid: copyBoardGrid(chessBoard.boardGrid),
    moveID: 'startingPosition',
    moveNumber: 0,
    aliveWhitePieces: copyTeam(chessBoard.aliveWhitePieces),
    aliveBlackPieces: copyTeam(chessBoard.aliveBlackPieces),
    deadWhitePieces: copyTeam(chessBoard.deadWhitePieces),
    deadBlackPieces: copyTeam(chessBoard.deadBlackPieces),
    start: [0,0],
    end: [0,0],
    whitesMoveAfter: true,
  }
  return chessBoard
}

export default makeChessBoard