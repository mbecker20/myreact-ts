import { LayoutGrid } from '../Grid/types'

export type BoardPos = [number, number]

export type BoardGrid = string[][]

export type PieceID = string

export interface Piece {
  ID: string,
  position: BoardPos,
  isAlive: boolean,
  Component: (props: any) => JSX.Element,
  onClick: () => void,
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
  whitePieces: Piece[],
  blackPieces: Piece[],
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