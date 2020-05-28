import React from 'react';
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import bishopIcon from './icons/bishop.svg'
import useStyles from './pieceJSS';

function Bishop({ grid, gridPos, isWhite, onClick }: PieceComponentProps) {
  const classes = useStyles()
  const baseStyle = isWhite ? whitePieceStyle : blackPieceStyle
  const style = Object.assign(Object.assign({}, baseStyle), { transform: 'scaleX(1.3)' })
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={bishopIcon}
        style={style}
        alt='bishop icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Bishop;