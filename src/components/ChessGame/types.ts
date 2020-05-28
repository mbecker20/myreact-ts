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

export interface PawnPiece extends Piece {
  canEnPassantPos: boolean,
  canEnPassantNeg: boolean,
  enPassant: (target: BoardPos) => void
}

export interface KingPiece extends Piece {
  canCastleShort: boolean,
  canCastleLong: boolean,
  shortCastle: () => void,
  longCastle: () => void,
}

export interface Move {
  isWhiteMove: boolean,
  piece: Piece,
  from: BoardPos,
  to: BoardPos,
  taken?: Piece,
}

export interface Team {
  [pieceID: string]: Piece | PawnPiece | KingPiece
}

export interface SpecialHighlightedSquare {
  boardPos: BoardPos,
  onClick: () => void,
}

export interface ChessBoard {
  isWhitesTurn: boolean,
  boardGrid: string[][],
  moveList: Move[],
  aliveWhitePieces: Team,
  deadWhitePieces: Team,
  aliveBlackPieces: Team,
  deadBlackPieces: Team,
  highlightedSquares: BoardPos[],
  highlightingPiece: Piece | undefined,
  specialHighlightedSquares: SpecialHighlightedSquare[],
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