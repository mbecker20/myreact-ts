import React from 'react';
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import bishopIcon from './icons/bishop.svg'
import useStyles from './pieceJSS';

function Bishop({ grid, gridPos, isWhite}: PieceComponentProps) {
  const classes = useStyles()
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={bishopIcon}
        style={isWhite ? whitePieceStyle : blackPieceStyle}
        alt='bishop icon'
      />
    </grid.Item>
  );
}

export default Bishop;