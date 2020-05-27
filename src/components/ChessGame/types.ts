export type BoardPos = [number, number]

export type BoardGrid = string[][]

export interface Piece {
  ID: string,
  position: BoardPos,
  isAlive: boolean,
}

export interface Move {
  isWhiteMove: boolean,
  piece: Piece,
  from: BoardPos,
  to: BoardPos,
  taken?: Piece,
}

export interface ChessBoard {
  boardGrid: string[][],
  moveList: Move[],
  aliveWhitePieces: Piece[],
  aliveBlackPieces: Piece[],
  deadWhitePieces: Piece[],
  deadBlackPieces: Piece[],
}