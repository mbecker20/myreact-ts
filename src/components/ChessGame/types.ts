type BoardPos = [number, number]

export interface Move {
  piece: string,
  from: BoardPos,
  to: BoardPos,
}

export interface ChessBoard {
  boardGrid: string[][]
  moveList: Move[]
}