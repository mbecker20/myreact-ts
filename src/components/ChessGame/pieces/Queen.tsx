import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import queenIcon from './icons/queen.svg'
import useStyles from './pieceJSS';

function Queen({ grid, gridPos, isWhite}: PieceComponentProps) {
  const classes = useStyles()
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={queenIcon}
        style={isWhite ? whitePieceStyle : blackPieceStyle}
        alt='queen icon'
      />
    </grid.Item>
  );
}

export default Queen