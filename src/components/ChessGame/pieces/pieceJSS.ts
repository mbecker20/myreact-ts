import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  Piece: {
    width: '10vmin',
    height: '8vmin',
    '&:hover': {
      cursor: 'pointer'
    },
  }
})

export default useJSS;