import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import knightIcon from './icons/knight.svg'
import useStyles from './pieceJSS';

function Knight({ grid, gridPos, isWhite, onClick}: PieceComponentProps) {
  const classes = useStyles()
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={knightIcon}
        style={isWhite ? whitePieceStyle : blackPieceStyle}
        alt='knight icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Knight