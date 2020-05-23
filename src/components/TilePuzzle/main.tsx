import React, {useState} from 'react'
import { animated, useSpring } from 'react-spring'
import useStyles from './style'
import colors from '../../appColors'
import { Grid, Tile, TextButton } from '../all'
import { moveToEmpty, makeTileGrid, shuffleTiles, isSolved } from './funcs'

let tileGrid = makeTileGrid()
shuffleTiles(tileGrid, 150)

function PuzzleGrid({ classes, setSolved }) {
  const [numMoves, setState] = useState(0)

  function innerMoveToEmpty(tileIndex) {
    moveToEmpty(tileGrid, tileIndex)
    if (isSolved(tileGrid)) {
      setSolved(true)
    } else {
      setSolved(false)
    }
    setState(numMoves + 1)
  }

  return (
    <Grid.Container padding={5} numRows={4} numCols={4}>
      {tileGrid.get('tileRange').map((number) => {
        return (
          <Grid.Item key={number} gridPos={tileGrid.get(number).position} onComplete={() => console.log('complete')}>
            <Tile classes={classes} number={number} onClick={() => innerMoveToEmpty(number)}/>
          </Grid.Item>
        )
      })}
    </Grid.Container>
  )
}

function TilePuzzle() {
  const classes = useStyles({ colors: colors });
  const [shuffleCount, setShuffleCount] = useState(0)
  const [solved, setSolved] = useState(false)

  const solvedSpring = useSpring({
    opacity: solved ? 1 : 0
  })
  
  function innerShuffle() {
    shuffleTiles(tileGrid, 150)
    setShuffleCount(shuffleCount + 1)
    setSolved(false)
  }
  
  return (
    <div className={classes.Bounder}>
      <Grid.Container padding={0} numRows={7} numCols={1}>
        <Grid.Item gridPos={[3,0]}>
          <div className={classes.TilePuzzle}>
            <PuzzleGrid 
              classes={classes}
              setSolved={setSolved}
            />
          </div>
        </Grid.Item>
        <Grid.Item gridPos={[6,0]}>
          <TextButton text='shuffle' onClick={innerShuffle} style={{
              width: '18vmin',
              height: '8vmin',
              transform: 'translate(-50%, -50%)'
            }}/>
        </Grid.Item>
        <Grid.Item gridPos={[0,0]}>
          <animated.div className={classes.Solved} style={solvedSpring}>
            Solved!
          </animated.div>
        </Grid.Item>
      </Grid.Container>
    </div>
  )
}

export default TilePuzzle