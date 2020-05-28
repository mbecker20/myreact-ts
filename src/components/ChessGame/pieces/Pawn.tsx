import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import pawnIcon from './icons/pawn.svg'
import useStyles from './pieceJSS';

function Pawn({ grid, gridPos, isWhite}: PieceComponentProps) {
  const classes = useStyles()
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={pawnIcon}
        style={isWhite ? whitePieceStyle : blackPieceStyle}
        alt='rook icon'
      />
    </grid.Item>
  );
}

export default Pawn