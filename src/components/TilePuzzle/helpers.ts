import { range } from '../../helpers/vecFuncs'
import { randomGenInt } from '../../helpers/randomGen'
import { arrayEqual } from '../../helpers/genFuncs'

interface Tile {
  position: [number, number],
  solvedPosition: [number, number]
}

interface Empty {
  position: [number, number],
  isEmpty: boolean
}

export interface TileGrid {
  tileRange: number[],
  empty: Empty,
  [index: number]: Tile
}

export function makeTileGrid(): TileGrid {
  const tileRange = range(1,16)
  let tg: any = {}
  tg.tileRange = range(1,16)

  for (var i=0; i<tileRange.length; i++) {
    var row = Math.floor((tileRange[i] - 1)/4)
    var col = (tileRange[i]-1) % 4
    tg[tileRange[i]] = {
      position: [row, col],
      solvedPosition: [row, col],
    }
  }

  tg.empty = {
    position: [3,3],
    isEmpty: true
  }

  const tileGrid: TileGrid = tg

  return tileGrid
}

function nextToEmpty(tileGrid: TileGrid, tileIndex: number) {
  const tilePos = tileGrid[tileIndex].position
  const emptyPos = tileGrid.empty.position
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
  return false
}

function getRandIndexNextToEmpty(tileGrid: TileGrid) {
  const tileRange = tileGrid.tileRange
  let indices = []
  for(var i = 0; i < tileRange.length; i++) {
    if (nextToEmpty(tileGrid, tileRange[i])) {
      indices.push(tileRange[i])
    }
  }
  return indices[randomGenInt(0,indices.length-1)]
}

function isSolvedRec(tileGrid: TileGrid, index: number): boolean {
  if (index === 0) {
    return true
  } else {
    const tile = tileGrid[index]
    if (arrayEqual(tile.position, tile.solvedPosition)) {
      return isSolvedRec(tileGrid, index - 1)
    } else {
      return false
    }
  }
}

export function isSolved(tileGrid: TileGrid) {
  return isSolvedRec(tileGrid, 15)
}

export function moveToEmpty(tileGrid: TileGrid, tileIndex: number) {
  if (nextToEmpty(tileGrid, tileIndex)) {
    const temp = tileGrid[tileIndex].position
    tileGrid[tileIndex].position = tileGrid.empty.position
    tileGrid.empty.position = temp
  }
}

export function shuffleTiles(tileGrid: TileGrid, numMoves: number) {
  // performes instant shuffling of tiles
  for (var i = 0 ; i < numMoves; i++) {
    moveToEmpty(tileGrid, getRandIndexNextToEmpty(tileGrid))
  }
}