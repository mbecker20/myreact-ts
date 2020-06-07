import React, { useState } from 'react'
import { LayoutGrid } from '../Grid/types'
import useStyles from './style'
import { useSpring } from 'react-spring'

interface Props {
  grid: LayoutGrid,
  gridPos: [number, number],
  onClick: (ev: any) => void
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
      >
        <circle cx="50%" cy="50%" r="2vmin" stroke="black" strokeWidth="3" fill="white" opacity='0.25'/>
      </svg>
      <div 
        className={classes.InteractLayer}
        onClick={onClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onDragEnter={(ev: any) => {
          ev.preventDefault()
          onPointerEnter()
        }}
        onDragLeave={(ev: any) => {
          ev.preventDefault()
          onPointerLeave()
        }}
        onDragOver={(ev: any) => ev.preventDefault()}
        onDrop={onClick}
      />
    </grid.Item>
  )
}

export default HighlightedSquare