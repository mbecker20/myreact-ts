import { BoardGrid } from '../types'
import { boardGridEmpty, boardGridOtherTeam, boardGridEmptyOrOtherTeam } from './boardGridEmpty'

export function isEmptyDelta(boardGrid: BoardGrid, row: number, deltaRow: number, col: number, deltaCol: number) {
  const newRow = row + deltaRow
  const newCol = col + deltaCol
  return (
    (newRow > -1 && newRow < 8) &&
    (newCol > -1 && newCol < 8) &&
    boardGridEmpty(boardGrid, [newRow, newCol])
  )
}

export function isCaptureDelta(boardGrid: BoardGrid, otherTeam: string, row: number, deltaRow: number, col: number, deltaCol: number) {
  const newRow = row + deltaRow
  const newCol = col + deltaCol
  return (
    (newRow > -1 && newRow < 8) &&
    (newCol > -1 && newCol < 8) &&
    boardGridOtherTeam(boardGrid, [newRow, newCol], otherTeam)
  )
}

export function isValidDelta(boardGrid: BoardGrid, otherTeam: string, row: number, deltaRow: number, col: number, deltaCol: number) {
  const newRow = row + deltaRow
  const newCol = col + deltaCol
  return (
    (newRow > -1 && newRow < 8) &&
    (newCol > -1 && newCol < 8) &&
    boardGridEmptyOrOtherTeam(boardGrid, [newRow, newCol], otherTeam)
  )
}