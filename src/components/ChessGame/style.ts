import {createUseStyles} from 'react-jss'
import { Theme } from '../../appColors'

const useStyles = createUseStyles({
  Bounder: {
    position: 'absolute',
    display: 'flex',
    width: '80vmin',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TilePuzzle: {
    backgroundColor: (props: Theme) => props.colors.primary,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60vmin',
    height: '60vmin',
    borderRadius: '25px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    transform: 'translate(-50%, -50%)',
  },

  Tile: {
    backgroundColor: (props: Theme) => props.colors.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10vmin',
    height: '10vmin',
    fontSize: 'calc(10px + 2vmin)',
    borderRadius: '10px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
      cursor: 'default',
    },
    userSelect: 'none',
  },

  Solved: {
    backgroundColor: (props: Theme) => props.colors.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60vmin',
    height: '10vmin',
    fontSize: 'calc(10px + 2vmin)',
    borderRadius: '10px',
    position: 'absolute',
    top: '4%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
      cursor: 'default',
    },
    userSelect: 'none',
    transform: 'translate(-50%, -50%)',
  },

  Piece: {
    width: '10vmin',
    height: '10vmin'
  }
})

export default useStyles;