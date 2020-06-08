import { BoardGrid, ChessBoard, Piece, BoardPos, Move, Team } from "../types";

const ranks = ['8', '7', '6', '5', '4', '3', '2', '1']
const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export function copyBoardGrid(boardGrid: BoardGrid) {
  return boardGrid.map(row => row.map(item => item))
}

export function copyTeam(team: Team) {
  let copy: Team = {}
  Object.keys(team).forEach(key => {
    copy[key] = Object.assign({}, team[key])
  })
  return copy
}

function getMoveID(piece: Piece, target: BoardPos) {
  if (piece.ID[0] === 'P') {
    return files[target[1]] + ranks[target[0]]
  }
  return `${piece.ID[0]} ${files[target[1]] + ranks[target[0]]}`
}

export function addToMoveList(chessBoard: ChessBoard, piece: Piece, startTarget: BoardPos, endTarget: BoardPos, isWhiteMove: boolean) {
  const bgCopy = copyBoardGrid(chessBoard.boardGrid)
  const moveID = getMoveID(piece, endTarget)
  const move: Move = {
    boardGrid: bgCopy,
    moveID: moveID,
    moveNumber: chessBoard.currentMove,
    aliveWhitePieces: copyTeam(chessBoard.aliveWhitePieces),
    aliveBlackPieces: copyTeam(chessBoard.aliveBlackPieces),
    deadWhitePieces: copyTeam(chessBoard.deadWhitePieces),
    deadBlackPieces: copyTeam(chessBoard.deadBlackPieces),
    start: startTarget,
    end: endTarget,
    whitesMoveAfter: !isWhiteMove,
  }
  chessBoard.moveList[chessBoard.currentMove] = move
}

export function restoreFromMove(chessBoard: ChessBoard, move: Move) {
  chessBoard.boardGrid = move.boardGrid
  chessBoard.aliveWhitePieces = move.aliveWhitePieces
  chessBoard.aliveBlackPieces = move.aliveBlackPieces
  chessBoard.deadWhitePieces = move.deadWhitePieces
  chessBoard.deadBlackPieces = move.deadBlackPieces
  chessBoard.currentMove = move.moveNumber
  if (move.moveNumber === 0) {
    chessBoard.highlightedTiles = []
  } else {
    chessBoard.highlightedTiles = [move.start, move.end]
  }
  chessBoard.isWhitesTurn = move.whitesMoveAfter
}