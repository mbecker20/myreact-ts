import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import rookIcon from './icons/rook.svg'
import useStyles from './pieceJSS';

function Rook({ grid, gridPos, isWhite, onClick }: PieceComponentProps) {
  const classes = useStyles()
  const baseStyle = isWhite ? whitePieceStyle : blackPieceStyle
  const style = Object.assign(Object.assign({}, baseStyle), { transform: 'scaleX(1.1)' })
  return (
    <grid.Item gridPos={gridPos} style={gridPieceStyle}>
      <img
        className={classes.Piece}
        src={rookIcon}
        style={style}
        alt='rook icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Rook