import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import kingIcon from './icons/king.svg'
import useStyles from './pieceJSS';

function King({ grid, gridPos, isWhite}: PieceComponentProps) {
  const classes = useStyles()
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={kingIcon}
        style={isWhite ? whitePieceStyle : blackPieceStyle}
        alt='king icon'
      />
    </grid.Item>
  );
}

export default King