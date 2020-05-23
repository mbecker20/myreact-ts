import { range } from '../../scripts/vecFuncs'
import { randomGenInt } from '../../scripts/randomGen'
import { arrayEqual } from '../../scripts/genFuncs'

export function makeTileGrid() {
  const tileRange = range(1,16)
  let tileGrid = new Map()
  tileGrid.set('tileRange', tileRange)

  for (var i=0; i<tileRange.length; i++) {
    var row = Math.floor((tileRange[i] - 1)/4)
    var col = (tileRange[i]-1) % 4
    tileGrid.set(tileRange[i], {
      position: [row, col],
      solvedPosition: [row, col],
    })
  }

  tileGrid.set('empty', {
    position: [3,3],
    isEmpty: true

  })

  return tileGrid
}

function nextToEmpty(tileGrid, tileIndex) {
  const tilePos = tileGrid.get(tileIndex).position
  const emptyPos = tileGrid.get('empty').position
  if (emptyPos[0] === tilePos[0]) {
    return (
      emptyPos[1] === tilePos[1] - 1 || 
      emptyPos[1] === tilePos[1] + 1
    )
  } else if (emptyPos[1] === tilePos[1]) {
    return (
      emptyPos[0] === tilePos[0] - 1 || 
      emptyPos[0] === tilePos[0] + 1
    )
  }
}

function getRandIndexNextToEmpty(tileGrid) {
  const tileRange = tileGrid.get('tileRange')
  let indices = []
  for(var i = 0; i < tileRange.length; i++) {
    if (nextToEmpty(tileGrid, tileRange[i])) {
      indices.push(tileRange[i])
    }
  }
  return indices[randomGenInt(0,indices.length-1)]
}

function isSolvedRec(tileGrid, index) {
  if (index === 0) {
    return true
  } else {
    const tile = tileGrid.get(index)
    if (arrayEqual(tile.position, tile.solvedPosition)) {
      return isSolvedRec(tileGrid, index - 1)
    } else {
      return false
    }
  }
}

export function isSolved(tileGrid) {
  return isSolvedRec(tileGrid, 15)
}

export function moveToEmpty(tileGrid, tileIndex) {
  if (nextToEmpty(tileGrid, tileIndex)) {
    const tile = tileGrid.get(tileIndex)
    const empty = tileGrid.get('empty')
    const temp = tile.position
    tile.position = empty.position
    empty.position = temp
  }
}

export function shuffleTiles(tileGrid, numMoves) {
  // performes instant shuffling of tiles
  for (var i = 0 ; i < numMoves; i++) {
    moveToEmpty(tileGrid, getRandIndexNextToEmpty(tileGrid))
  }
}