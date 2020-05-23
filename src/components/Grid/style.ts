import {createUseStyles} from 'react-jss'

// useStyles will input a props object
const useStyles = createUseStyles({
  Grid: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  GridItem: {
    display: 'inline-block',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default useStyles;