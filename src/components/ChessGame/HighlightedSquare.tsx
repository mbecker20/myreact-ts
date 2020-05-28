import React from 'react'
import { LayoutGrid } from '../Grid/types';
import useStyles from './style';

interface Props {
  grid: LayoutGrid,
  gridPos: [number, number],
  onClick: () => void
}

function HighlightedSquare({ grid, gridPos, onClick}: Props) {
  const classes = useStyles()
  return (
    <grid.StaticItem gridPos={gridPos}>
      <svg className={classes.HighlightedSquare} onClick={onClick}>
        <circle cx="50%" cy="50%" r="2.5vmin" stroke="black" strokeWidth="3" fill="white" opacity='0.25'/>
      </svg>
    </grid.StaticItem>
  );
}

export default HighlightedSquare