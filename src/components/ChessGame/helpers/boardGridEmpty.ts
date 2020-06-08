import { BoardGrid, BoardPos } from '../types'

export function boardGridEmpty(boardGrid: BoardGrid, boardPos: BoardPos) {
  const tileContent = boardGrid[boardPos[0]][boardPos[1]]
  return (
    tileContent === 'E'
  )
}

export function boardGridOtherTeam(boardGrid: BoardGrid, boardPos: BoardPos, otherTeam: string) {
  const tileContent = boardGrid[boardPos[0]][boardPos[1]]
  return (
    tileContent[0] === otherTeam
  )
}

export function boardGridEmptyOrOtherTeam(boardGrid: BoardGrid, boardPos: BoardPos, otherTeam: string) {
  const tileContent = boardGrid[boardPos[0]][boardPos[1]]
  return (
    tileContent[0] === otherTeam ||
    tileContent[0] === 'E'
  )
}