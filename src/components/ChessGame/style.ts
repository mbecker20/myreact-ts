import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Bounder: {
    position: 'absolute',
    display: 'flex',
    width: '80vmin',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Piece: {
    width: '10vmin',
    height: '10vmin'
  },

  HighlightedSquare: {
    width: '10vmin',
    height: '10vmin',
  },
})

export default useStyles;