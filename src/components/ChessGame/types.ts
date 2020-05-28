import { LayoutGrid } from '../Grid/types'

export type BoardPos = [number, number]

export type BoardGrid = string[][]

export type PieceID = string

export interface Piece {
  ID: string,
  position: BoardPos,
  Component: (props: any) => JSX.Element,
  onClick: () => void,
  isWhite: boolean,
}

export interface Move {
  isWhiteMove: boolean,
  piece: Piece,
  from: BoardPos,
  to: BoardPos,
  taken?: Piece,
}

export interface Team {
  [pieceID: string]: Piece
}

export interface ChessBoard {
  boardGrid: string[][],
  moveList: Move[],
  aliveWhitePieces: Team,
  deadWhitePieces: Team,
  aliveBlackPieces: Team,
  deadBlackPieces: Team,
  highlightedSquares: BoardPos[],
  highlightingPiece: Piece | undefined,
  [index: string]: any,
}

export interface PieceComponentProps {
  grid: LayoutGrid,
  isWhite: boolean,
  gridPos: [number, number],
  onClick: () => void,
}

export interface GridPieceStyle {
  width: string,
  height: string,
}

export interface SVGPieceStyle {
  filter: string
}