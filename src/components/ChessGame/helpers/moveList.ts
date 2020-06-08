import { BoardGrid, ChessBoard, Piece, BoardPos, Move, Team } from "../types";

const ranks = ['8', '7', '6', '5', '4', '3', '2', '1']
const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function copyBoardGrid(boardGrid: BoardGrid) {
  return boardGrid.map(row => row.map(item => item))
}

function copyTeam(team: Team) {
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

export function addToMoveList(chessBoard: ChessBoard, piece: Piece, startTarget: BoardPos, endTarget: BoardPos) {
  const bgCopy = copyBoardGrid(chessBoard.boardGrid)
  const moveID = getMoveID(piece, endTarget)
  const move: Move = {
    boardGrid: bgCopy,
    moveID: moveID,
    aliveWhitePieces: copyTeam(chessBoard.aliveWhitePieces),
    aliveBlackPieces: copyTeam(chessBoard.aliveBlackPieces),
    deadWhitePieces: copyTeam(chessBoard.deadWhitePieces),
    deadBlackPieces: copyTeam(chessBoard.deadBlackPieces),
  }
  chessBoard.moveList.push(move)
}

export function restoreFromMove(chessBoard: ChessBoard, move: Move) {
  chessBoard.boardGrid = move.boardGrid
  chessBoard.aliveWhitePieces = move.aliveWhitePieces
  chessBoard.aliveBlackPieces = move.aliveBlackPieces
  chessBoard.deadWhitePieces = move.deadWhitePieces
  chessBoard.deadBlackPieces = move.deadBlackPieces
}