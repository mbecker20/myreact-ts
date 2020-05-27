import React from 'react'
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import { makeGrid } from '../../helpers/vecFuncs'
import { GIProps, LayoutGrid } from './types'

function createGridArray(padding: number, numRows: number, numCols: number): string[][] {
  const stepLeft = (100 - 2*padding) / numCols
  const stepTop = (100 - 2*padding) / numRows
  const p0left = padding + stepLeft/2
  const p0top = padding + stepTop/2
  return makeGrid(numRows, numCols, function(i, j) {
    return [(p0left + j*stepLeft)+'%', (p0top + i*stepTop)+'%']
  })
}

function makeLayoutGrid(padding: number, numRows: number, numCols: number) {
  const gridArray = createGridArray(padding, numRows, numCols)
  function Item({ gridPos, style, children }: GIProps) {
    return (
      <GridItem gridPos={gridPos} grid={gridArray} style={style} children={children}/>
    )
  }
  function StaticItem({ gridPos, style, children}: GIProps) {
    return (
      <GridItem gridPos={gridPos} grid={gridArray} style={style} children={children}/>
    )
  }
  const Grid: LayoutGrid = {
    grid: gridArray,
    Container: GridContainer,
    Item: Item,
    StaticItem: StaticItem,
  }

  return Grid
}

export default makeLayoutGrid