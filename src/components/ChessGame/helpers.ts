import { makeGrid } from '../../helpers/vecFuncs'
import { ChessBoard, Piece, PieceID, BoardPos, BoardGrid, Team } from './types'
import * as pieces from './pieces/all'

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

function showPossiblePawnMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const step = isWhite ? -1 : 1
  const startingRank = isWhite ? 6 : 1
  const otherColor = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  if (chessBoard.boardGrid[boardPos[0] + step][boardPos[1]] === 'E') {
    possibleMoves.push([boardPos[0] + step, boardPos[1]])
  }
  if (boardPos[1] < 7 && chessBoard.boardGrid[boardPos[0] + step][boardPos[1] + 1][0] === otherColor) {
    possibleMoves.push([boardPos[0] + step, boardPos[1] + 1])
  }
  if (boardPos[1] > 0 && chessBoard.boardGrid[boardPos[0] + step][boardPos[1] - 1][0] === otherColor) {
    possibleMoves.push([boardPos[0] + step, boardPos[1] - 1])
  }
  if (boardPos[0] === startingRank && chessBoard.boardGrid[boardPos[0] + 2*step][boardPos[1]] === 'E') {
    possibleMoves.push([boardPos[0] + 2*step, boardPos[1]])
  }
  chessBoard.highlightedSquares = possibleMoves
}

function boardGridEmpty(boardGrid: BoardGrid, boardPos: BoardPos) {
  const tileContent = boardGrid[boardPos[0]][boardPos[1]]
  return (
    tileContent === 'E'
  )
}

function boardGridOtherTeam(boardGrid: BoardGrid, boardPos: BoardPos, otherTeam: string) {
  const tileContent = boardGrid[boardPos[0]][boardPos[1]]
  return (
    tileContent[0] === otherTeam
  )
}

function boardGridEmptyOrOtherTeam(boardGrid: BoardGrid, boardPos: BoardPos, otherTeam: string) {
  const tileContent = boardGrid[boardPos[0]][boardPos[1]]
  return (
    tileContent[0] === otherTeam ||
    tileContent[0] === 'E'
  )
}

function isEmptyDelta(boardGrid: BoardGrid, row: number, deltaRow: number, col: number, deltaCol: number) {
  const newRow = row + deltaRow
  const newCol = col + deltaCol
  return (
    (newRow > -1 && newRow < 8) &&
    (newCol > -1 && newCol < 8) &&
    boardGridEmpty(boardGrid, [newRow, newCol])
  )
}

function isCaptureDelta(boardGrid: BoardGrid, otherTeam: string, row: number, deltaRow: number, col: number, deltaCol: number) {
  const newRow = row + deltaRow
  const newCol = col + deltaCol
  return (
    (newRow > -1 && newRow < 8) &&
    (newCol > -1 && newCol < 8) &&
    boardGridOtherTeam(boardGrid, [newRow, newCol], otherTeam)
  )
}

function isValidDelta(boardGrid: BoardGrid, otherTeam: string, row: number, deltaRow: number, col: number, deltaCol: number) {
  const newRow = row + deltaRow
  const newCol = col + deltaCol
  return (
    (newRow > -1 && newRow < 8) &&
    (newCol > -1 && newCol < 8) &&
    boardGridEmptyOrOtherTeam(boardGrid, [newRow, newCol], otherTeam)
  )
}

function showPossibleKingMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const row = boardPos[0]
  const col = boardPos[1]
  const otherTeam = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  const i = 1
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, i, col, i)) {
    possibleMoves.push([row+i, col+i])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, i, col, -i)) {
    possibleMoves.push([row+i, col-i])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, -i, col, i)) {
    possibleMoves.push([row-i, col+i])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, -i, col, -i)) {
    possibleMoves.push([row-i, col-i])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, i, col, 0)) {
    possibleMoves.push([row+i, col])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, -i, col, 0)) {
    possibleMoves.push([row-i, col])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, 0, col, i)) {
    possibleMoves.push([row, col+i])
  }
  if (isValidDelta(chessBoard.boardGrid, otherTeam, row, 0, col, -i)) {
    possibleMoves.push([row, col-i])
  }
  chessBoard.highlightedSquares = possibleMoves
}

function showPossibleQueenMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const row = boardPos[0]
  const col = boardPos[1]
  const otherTeam = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  let i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, i, col, i)) {
    possibleMoves.push([row+i, col+i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, i, col, i)){
    possibleMoves.push([row+i, col+i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, i, col, -i)) {
    possibleMoves.push([row+i, col-i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, i, col, -i)){
    possibleMoves.push([row+i, col-i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, -i, col, i)) {
    possibleMoves.push([row-i, col+i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, -i, col, i)){
    possibleMoves.push([row-i, col+i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, -i, col, -i)) {
    possibleMoves.push([row-i, col-i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, -i, col, -i)){
    possibleMoves.push([row-i, col-i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, i, col, 0)) {
    possibleMoves.push([row+i, col])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, i, col, 0)){
    possibleMoves.push([row+i, col])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, -i, col, 0)) {
    possibleMoves.push([row-i, col])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, -i, col, 0)){
    possibleMoves.push([row-i, col])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, 0, col, i)) {
    possibleMoves.push([row, col+i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, 0, col, i)){
    possibleMoves.push([row, col+i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, 0, col, -i)) {
    possibleMoves.push([row, col-i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, 0, col, -i)){
    possibleMoves.push([row, col-i])
  }
  chessBoard.highlightedSquares = possibleMoves
}

function showPossibleRookMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const row = boardPos[0]
  const col = boardPos[1]
  const otherTeam = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  let i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, i, col, 0)) {
    possibleMoves.push([row+i, col])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, i, col, 0)){
    possibleMoves.push([row+i, col])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, -i, col, 0)) {
    possibleMoves.push([row-i, col])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, -i, col, 0)){
    possibleMoves.push([row-i, col])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, 0, col, i)) {
    possibleMoves.push([row, col+i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, 0, col, i)){
    possibleMoves.push([row, col+i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, 0, col, -i)) {
    possibleMoves.push([row, col-i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, 0, col, -i)){
    possibleMoves.push([row, col-i])
  }
  chessBoard.highlightedSquares = possibleMoves
}

function showPossibleBishopMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const row = boardPos[0]
  const col = boardPos[1]
  const otherTeam = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  let i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, i, col, i)) {
    possibleMoves.push([row+i, col+i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, i, col, i)){
    possibleMoves.push([row+i, col+i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, i, col, -i)) {
    possibleMoves.push([row+i, col-i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, i, col, -i)){
    possibleMoves.push([row+i, col-i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, -i, col, i)) {
    possibleMoves.push([row-i, col+i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, -i, col, i)){
    possibleMoves.push([row-i, col+i])
  }
  i = 1
  while (isEmptyDelta(chessBoard.boardGrid, row, -i, col, -i)) {
    possibleMoves.push([row-i, col-i])
    i++
  }
  if (isCaptureDelta(chessBoard.boardGrid, otherTeam, row, -i, col, -i)){
    possibleMoves.push([row-i, col-i])
  }
  chessBoard.highlightedSquares = possibleMoves
}

function showPossibleKnightMoves(chessBoard: ChessBoard, boardPos: BoardPos, isWhite: boolean) {
  const row = boardPos[0]
  const col = boardPos[1]
  const otherTeam = isWhite ? 'B' : 'W'
  let possibleMoves: BoardPos[] = []
  if (row + 2 < 8 && col + 1 < 8 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row+2, col+1], otherTeam)) {
    possibleMoves.push([row+2, col+1])
  } if (row + 2 < 8 && col - 1 > -1 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row+2, col-1], otherTeam)) {
    possibleMoves.push([row+2, col-1])
  } if (row - 2 > -1 && col + 1 < 8 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row-2, col+1], otherTeam)) {
    possibleMoves.push([row-2, col+1])
  } if (row - 2 > -1 && col - 1 > -1 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row-2, col-1], otherTeam)) {
    possibleMoves.push([row-2, col-1])
  } if (row + 1 < 8 && col + 2 < 8 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row+1, col+2], otherTeam)) {
    possibleMoves.push([row+1, col+2])
  } if (row + 1 < 8 && col - 2 > -1 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row+1, col-2], otherTeam)) {
    possibleMoves.push([row+1, col-2])
  } if (row - 1 > -1 && col + 2 < 8 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row-1, col+2], otherTeam)) {
    possibleMoves.push([row-1, col+2])
  } if (row - 1 > -1 && col - 2 > -1 && boardGridEmptyOrOtherTeam(chessBoard.boardGrid, [row-1, col-2], otherTeam)) {
    possibleMoves.push([row-1, col-2])
  }
  chessBoard.highlightedSquares = possibleMoves
}

function showPossibleMoves(chessBoard: ChessBoard, ID: string, isWhite: boolean) {
  const piecesKey = isWhite ? 'aliveWhitePieces' : 'aliveBlackPieces'
  const boardPos = chessBoard[piecesKey][ID].position
  if (ID[1] === 'P') {
    showPossiblePawnMoves(chessBoard, boardPos, isWhite)
  } else if (ID[1] === 'K') {
    showPossibleKingMoves(chessBoard, boardPos, isWhite)
  } else if (ID[1] === 'Q') {
    showPossibleQueenMoves(chessBoard, boardPos, isWhite)
  } else if (ID[1] === 'R') {
    showPossibleRookMoves(chessBoard, boardPos, isWhite)
  } else if (ID[1] === 'B') {
    showPossibleBishopMoves(chessBoard, boardPos, isWhite)
  } else if (ID[1] === 'N') {
    showPossibleKnightMoves(chessBoard, boardPos, isWhite)
  }
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
  return {
    position: position,
    Component: component,
    onClick: () => {
      showPossibleMoves(chessBoard,team + ID, isWhite)
    },
    isWhite: isWhite,
    ID: ID,
  }
}

function makePieces(chessBoard: ChessBoard, isWhite: boolean) {
  const backRank = isWhite ? 7 : 0
  const pawnRank = isWhite ? 6 : 1
  const team = isWhite ? 'W' : 'B'
  let pieces: any = {}
  pieces[team + 'K'] = makePiece(chessBoard, 'K', [backRank, 4], isWhite)
  pieces[team + 'Q'] = makePiece(chessBoard, 'Q', [backRank, 3], isWhite)
  pieces[team + 'R0' ] = makePiece(chessBoard, 'R0', [backRank, 0], isWhite)
  pieces[team + 'R7'] = makePiece(chessBoard, 'R7', [backRank, 7], isWhite)
  pieces[team + 'N1'] = makePiece(chessBoard, 'N1', [backRank, 1], isWhite)
  pieces[team + 'N6'] = makePiece(chessBoard, 'N6', [backRank, 6], isWhite)
  pieces[team + 'B2'] = makePiece(chessBoard, 'B2', [backRank, 2], isWhite)
  pieces[team + 'B5'] = makePiece(chessBoard, 'B5', [backRank, 5], isWhite)
  for(var i = 0; i < 8; i++) {
    pieces[team + 'P' + i] = makePiece(chessBoard, 'P'+i, [pawnRank, i], isWhite)
  }
  return pieces as Team
}

export function movePiece(chessBoard: ChessBoard, piece: Piece, target: BoardPos, isWhite: boolean) {
  const targetID = chessBoard.boardGrid[target[0]][target[1]]
  if (targetID === 'E') {
    chessBoard.boardGrid[target[0]][target[1]] = chessBoard.boardGrid[piece.position[0]][piece.position[1]]
    chessBoard.boardGrid[piece.position[0]][piece.position[1]] = 'E'
    piece.position = target
    chessBoard.highlightedSquares = []
    // need to add to move list
  } else {
    const otherTeamKey = isWhite ? 'BlackPieces' : 'WhitePieces'
    chessBoard['dead' + otherTeamKey][targetID] = chessBoard['alive' + otherTeamKey][targetID]
    delete chessBoard['alive' + otherTeamKey][targetID]
    chessBoard.boardGrid[target[0]][target[1]] = chessBoard.boardGrid[piece.position[0]][piece.position[1]]
    chessBoard.boardGrid[piece.position[0]][piece.position[1]] = 'E'
    piece.position = target
    chessBoard.highlightedSquares = []
  }
  
}

export function makeChessBoard(): ChessBoard {
  let chessBoard: ChessBoard = {
    boardGrid: makeBoardGrid(),
    moveList: [],
    highlightedSquares: [],
    aliveWhitePieces: {},
    deadWhitePieces: {},
    aliveBlackPieces: {},
    deadBlackPieces: {},
    highlightingPiece: undefined,
  }
  chessBoard.aliveWhitePieces = makePieces(chessBoard, true)
  chessBoard.aliveBlackPieces = makePieces(chessBoard, false)
  return chessBoard
}