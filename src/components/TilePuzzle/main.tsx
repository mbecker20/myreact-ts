import React, {useState} from 'react'
import { animated, useSpring } from 'react-spring'
import useStyles from './style'
import colors from '../../appColors'
import { Tile, TextButton } from '../all'
import makeLayoutGrid from '../Grid/main'
import { moveToEmpty, makeTileGrid, shuffleTiles, isSolved } from './helpers'
import { RouteComponentProps } from '@reach/router'

const layoutGrid = makeLayoutGrid(5, 4, 4)

let tileGrid = makeTileGrid()
shuffleTiles(tileGrid, 150)

interface PG {
  classes: object,
  setSolved: (solved: boolean) => void
}

function PuzzleGrid({ classes, setSolved }: PG) {
  const [numMoves, setState] = useState(0)

  function innerMoveToEmpty(tileIndex: number) {
    moveToEmpty(tileGrid, tileIndex)
    if (isSolved(tileGrid)) {
      setSolved(true)
      permaSolved = true
    } else {
      setSolved(false)
      permaSolved = false
    }
    setState(numMoves + 1)
  }

  return (
    <layoutGrid.Container>
      {tileGrid.tileRange.map((number) => {
        return (
          <layoutGrid.Item key={number} gridPos={tileGrid[number].position} >
            <Tile classes={classes} number={number} onClick={() => innerMoveToEmpty(number)}/>
          </layoutGrid.Item>
        )
      })}
    </layoutGrid.Container>
  )
}

const boundingGrid = makeLayoutGrid(0, 7, 1)
let permaSolved = false

function TilePuzzle(props: RouteComponentProps) {
  const classes = useStyles({ colors: colors });
  const [shuffleCount, setShuffleCount] = useState(0)
  const [solved, setSolved] = useState(permaSolved)

  const solvedSpring = useSpring({
    opacity: solved ? 1 : 0,
    transform: solved ? 'scale(1)' : 'scale(0)'
  })
  
  function innerShuffle() {
    shuffleTiles(tileGrid, 150)
    setShuffleCount(shuffleCount + 1)
    setSolved(false)
    permaSolved = false
  }
  
  return (
    <div className={classes.Bounder}>
      <boundingGrid.Container>
        <boundingGrid.Item gridPos={[3,0]}>
          <div className={classes.TilePuzzle}>
            <PuzzleGrid 
              classes={classes}
              setSolved={setSolved}
            />
          </div>
        </boundingGrid.Item>
        <boundingGrid.Item gridPos={[6,0]}>
          <TextButton text='shuffle' onClick={innerShuffle} style={{
              width: '18vmin',
              height: '8vmin',
            }}/>
        </boundingGrid.Item>
        <boundingGrid.Item gridPos={[0,0]}>
          <animated.div className={classes.Solved} style={solvedSpring}>
            Solved!
          </animated.div>
        </boundingGrid.Item>
      </boundingGrid.Container>
    </div>
  )
}

export default TilePuzzle