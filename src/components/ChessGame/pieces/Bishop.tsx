import React from 'react';
import { PieceComponentProps, SVGPieceStyle } from '../types'
import { gridPieceStyle, whitePieceStyle, blackPieceStyle} from './pieceStyle';
import bishopIcon from './icons/bishop.svg'
import useStyles from './pieceJSS';
import { useSpring } from 'react-spring'

const bishopWhitePieceStyle: SVGPieceStyle = Object.assign(Object.assign({}, whitePieceStyle), { transform: 'scaleX(1.3)' })
const bishopBlackPieceStyle: SVGPieceStyle = Object.assign(Object.assign({}, blackPieceStyle), { transform: 'scaleX(1.3)' })

function Bishop({ grid, gridPos, isWhite, onClick, isWhitesTurn }: PieceComponentProps) {
  const classes = useStyles()
  const baseStyle = isWhite ? bishopWhitePieceStyle : bishopBlackPieceStyle
  const springStyle = useSpring({ transform: isWhitesTurn ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(180deg)' })
  const gridPieceSpringStyle = Object.assign(Object.assign({}, gridPieceStyle), springStyle)
  return (
    <grid.Item gridPos={gridPos} style={gridPieceSpringStyle}>
      <img
        className={classes.Piece}
        src={bishopIcon}
        style={baseStyle}
        alt='bishop icon'
        onClick={onClick}
      />
    </grid.Item>
  );
}

export default Bishop;