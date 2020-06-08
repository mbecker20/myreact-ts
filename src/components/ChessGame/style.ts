import {createUseStyles} from 'react-jss'

const useJSS = createUseStyles({
  Bounder: {
    position: 'absolute',
    flexDirection: 'column',
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
    position: 'absolute',
  },

  InteractLayer: {
    width: '10vmin',
    height: '10vmin',
    opacity: '0',
  },
})

export default useJSS