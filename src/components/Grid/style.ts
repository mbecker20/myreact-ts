import {createUseStyles} from 'react-jss'

// useStyles will input a props object
const useStyles = createUseStyles({
  Container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  Item: {
    display: 'inline-block',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default useStyles;