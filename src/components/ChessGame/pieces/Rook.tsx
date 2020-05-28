import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import rookIcon from './icons/rook.svg'
import useStyles from './pieceJSS';

function Rook({ grid, gridPos, isWhite}: PieceComponentProps) {
  const classes = useStyles()
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={rookIcon}
        style={isWhite ? whitePieceStyle : blackPieceStyle}
        alt='rook icon'
      />
    </grid.Item>
  );
}

export default Rook