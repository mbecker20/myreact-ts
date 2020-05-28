import { GridPieceStyle, SVGPieceStyle } from "../types"

export const gridPieceStyle: GridPieceStyle = {
  width: '10vmin',
  height:'10vmin',
}

export const whitePieceStyle: SVGPieceStyle = {
  filter: 'invert(100%) sepia(95%) saturate(12%) hue-rotate(209deg) brightness(105%) contrast(100%)'
}

export const blackPieceStyle: SVGPieceStyle = {
  filter: ''
}