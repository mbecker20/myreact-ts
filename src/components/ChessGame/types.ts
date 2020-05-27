type BoardPos = [number, number]

export interface Piece {
  position: BoardPos,
}

export interface Move {
  piece: Piece,
  from: BoardPos,
  to: BoardPos,
  taken?: Piece,
}

export interface ChessBoard {
  boardGrid: string[][],
  moveList: Move[],
  whitePieces: Piece[],
  blackPieces: Piece[]
}