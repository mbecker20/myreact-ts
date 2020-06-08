import {createUseStyles} from 'react-jss'

// useStyles will input a props object
const useStyles = createUseStyles({
  Container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  Item: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)',
  },
})

export default useStyles;