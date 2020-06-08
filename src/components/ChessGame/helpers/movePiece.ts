import { ChessBoard, BoardPos, Piece } from '../types'

export default function movePiece(chessBoard: ChessBoard, piece: Piece, target: BoardPos, isWhite: boolean) {
  const targetID = chessBoard.boardGrid[target[0]][target[1]]
  chessBoard.isWhitesTurn = !chessBoard.isWhitesTurn
  if (targetID === 'E') {
    chessBoard.boardGrid[target[0]][target[1]] = chessBoard.boardGrid[piece.position[0]][piece.position[1]]
    chessBoard.boardGrid[piece.position[0]][piece.position[1]] = 'E'
    piece.position = target
    // need to add to move list
  } else {
    const otherTeamKey = isWhite ? 'BlackPieces' : 'WhitePieces'
    chessBoard['dead' + otherTeamKey][targetID] = chessBoard['alive' + otherTeamKey][targetID]
    delete chessBoard['alive' + otherTeamKey][targetID]
    chessBoard.boardGrid[target[0]][target[1]] = chessBoard.boardGrid[piece.position[0]][piece.position[1]]
    chessBoard.boardGrid[piece.position[0]][piece.position[1]] = 'E'
    piece.position = target
  }
  chessBoard.possibleMoves = []
  chessBoard.specialPossibleMoves = []
}