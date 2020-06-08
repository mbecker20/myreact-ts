import { ChessBoard, KingPiece, PawnPiece, BoardPos } from '../types'
import movePiece from './movePiece'
import { isCaptureDelta, isValidDelta, isEmptyDelta } from './boardDeltas'
import { boardGridEmpty, boardGridEmptyOrOtherTeam } from './boardGridEmpty'

function showPossiblePawnMoves(chessBoard: ChessBoard, pawn: PawnPiece, boardPos: BoardPos, isWhite: boolean) {
  const step = isWhite ? -1 : 1
  const startingRank = isWhite ? 6 : 1
  const otherColor = isWhite ? 'B' : 'W'
  const aliveOtherPiecesKey = isWhite ? 'aliveBlackPieces' : 'aliveWhitePieces'
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
  chessBoard.possibleMoves = possibleMoves
  if (boardPos[0] === startingRank && chessBoard.boardGrid[boardPos[0] + 2*step][boardPos[1]] === 'E') {
    const target = [boardPos[0] + 2*step, boardPos[1]] as BoardPos
    chessBoard.specialPossibleMoves.push({
      boardPos: target,
      onClick: () => {
        movePiece(chessBoard, pawn, target, isWhite)
        const posContent = chessBoard.boardGrid[target[0]][target[1]+1]
        const negContent = chessBoard.boardGrid[target[0]][target[1]-1]
        if (posContent && posContent.slice(0,2) === otherColor + 'P') {
          const posPawn = chessBoard[aliveOtherPiecesKey][posContent] as PawnPiece
          posPawn.canEnPassantNeg = true
        }
        if (negContent && negContent.slice(0,2) === otherColor + 'P') {
          const negPawn = chessBoard[aliveOtherPiecesKey][negContent] as PawnPiece
          negPawn.canEnPassantPos = true
        }
        chessBoard.specialPossibleMoves = []
      }
    })
  } else if (pawn.canEnPassantPos) {
    chessBoard.specialPossibleMoves.push({
      boardPos: [boardPos[0] + step, boardPos[1] + 1],
      onClick: () => {
        pawn.enPassant([boardPos[0] + step, boardPos[1] + 1])
        chessBoard.specialPossibleMoves = []
        pawn.canEnPassantNeg = false
        pawn.canEnPassantPos = false
      }
    })
  }
  if (pawn.canEnPassantNeg) {
    chessBoard.specialPossibleMoves.push({
      boardPos: [boardPos[0] + step, boardPos[1] - 1],
      onClick: () => {
        pawn.enPassant([boardPos[0] + step, boardPos[1] - 1])
        chessBoard.specialPossibleMoves = []
      }
    })
  }
}

function showPossibleKingMoves(chessBoard: ChessBoard, king: KingPiece, boardPos: BoardPos, isWhite: boolean) {
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
  chessBoard.possibleMoves = possibleMoves

  if (king.canCastleShort) {
    if (boardGridEmpty(chessBoard.boardGrid, [row, col+1]) && boardGridEmpty(chessBoard.boardGrid, [row, col+2])) {
      chessBoard.specialPossibleMoves.push({boardPos: [row, 6], onClick: () => {
        king.shortCastle()
      }})
    }
  }
  if (king.canCastleLong) {
    if (boardGridEmpty(chessBoard.boardGrid, [row, 1]) && boardGridEmpty(chessBoard.boardGrid, [row, 2]) && boardGridEmpty(chessBoard.boardGrid, [row, 3])) {
      chessBoard.specialPossibleMoves.push({boardPos: [row, 2], onClick: () => {
        king.longCastle()
      }})
    }
  }
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
  chessBoard.possibleMoves = possibleMoves
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
  chessBoard.possibleMoves = possibleMoves
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
  chessBoard.possibleMoves = possibleMoves
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
  chessBoard.possibleMoves = possibleMoves
}

function showPossibleMoves(chessBoard: ChessBoard, ID: string, isWhite: boolean) {
  chessBoard.possibleMoves = []
  chessBoard.specialPossibleMoves = []
  if (isWhite === chessBoard.isWhitesTurn) {
    const piecesKey = isWhite ? 'aliveWhitePieces' : 'aliveBlackPieces'
    const boardPos = chessBoard[piecesKey][ID].position
    if (ID[1] === 'P') {
      const pawn = chessBoard[piecesKey][ID] as PawnPiece
      showPossiblePawnMoves(chessBoard, pawn, boardPos, isWhite)
    } else if (ID[1] === 'K') {
      const king = chessBoard[piecesKey][ID] as KingPiece
      showPossibleKingMoves(chessBoard, king, boardPos, isWhite)
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
}

export default showPossibleMoves