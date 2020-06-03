import React, { useState } from 'react'
import { LayoutGrid } from '../Grid/types';
import useStyles from './style';
import { useSpring } from 'react-spring'

interface Props {
  grid: LayoutGrid,
  gridPos: [number, number],
  onClick: () => void
}

function HighlightedSquare({ grid, gridPos, onClick}: Props) {
  const classes = useStyles()
  const [isHighlighted, setHighlighted] = useState(false)
  const springStyle = useSpring({
    borderStyle: isHighlighted ? 'solid' : 'none',
    borderColor: '#ff0000',
  })
  function onPointerEnter() {
    setHighlighted(true)
  }
  function onPointerLeave() {
    setHighlighted(false)
  }
  return (
    <grid.Item gridPos={gridPos} style={springStyle}>
      <svg 
        className={classes.HighlightedSquare}
        onClick={onClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <circle cx="50%" cy="50%" r="2.5vmin" stroke="black" strokeWidth="3" fill="white" opacity='0.25'/>
      </svg>
    </grid.Item>
  );
}

export default HighlightedSquare