import React, { Children, isValidElement, cloneElement } from 'react'
import useStyles from './style'
import { makeGrid } from '../../scripts/vecFuncs'

function createGridArray(padding, numRows, numCols) {
  const stepLeft = (100 - 2*padding) / numCols
  const stepTop = (100 - 2*padding) / numRows
  const p0left = padding + stepLeft/2
  const p0top = padding + stepTop/2
  return makeGrid(numRows, numCols, function(i, j) {
    return [(p0left + j*stepLeft)+'%', (p0top + i*stepTop)+'%']
  })
}

function GridContainer({ padding, numRows, numCols, children }) {
  // everything done in percentages
  // children of GridContainer must be GridItem
  const grid = createGridArray(padding, numRows, numCols)
  const classes = useStyles()
  const childrenWithClasses = Children.map(children, child => {
    if(isValidElement(child)) {
      return cloneElement(child, { 
        classes: classes, 
        grid: grid 
      }, child.props.children)
    } else {
      return child
    }
  })
  return (
    <div className={classes.Grid}>
      {childrenWithClasses}
    </div>
  )
}

export default GridContainer