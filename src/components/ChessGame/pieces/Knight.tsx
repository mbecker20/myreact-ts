import React from 'react'
import { PieceComponentProps } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import knightIcon from './icons/knight.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

function Knight({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const springStyle = useSpring({ transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)' })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
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