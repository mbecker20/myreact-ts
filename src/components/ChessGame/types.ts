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
  isSelected: boolean,
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

export interface SpecialPossibleMove {
  boardPos: BoardPos,
  onClick: () => void,
}

export interface ChessBoard {
  isWhitesTurn: boolean,
  boardGrid: BoardGrid,
  moveList: Move[],
  aliveWhitePieces: Team,
  deadWhitePieces: Team,
  aliveBlackPieces: Team,
  deadBlackPieces: Team,
  chosenPiece: Piece | undefined,
  possibleMoves: BoardPos[],
  specialPossibleMoves: SpecialPossibleMove[],
  [index: string]: any,
}

export interface PieceComponentProps {
  grid: LayoutGrid,
  isWhite: boolean,
  gridPos: [number, number],
  onClick: () => void,
  onDragStart: () => void,
  isWhitesTurn?: boolean,
}

export interface BasePieceComponentProps {
  id: string,
  grid: LayoutGrid,
  gridPos: [number, number],
  onClick: () => void,
  onDragStart: () => void,
  isWhitesTurn?: boolean,
  img: any,
  imgStyle: object | undefined,
}

export interface GridPieceStyle {
  width: string,
  height: string,
}

export interface SVGPieceStyle {
  filter: string
}