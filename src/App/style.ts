import {createUseStyles} from 'react-jss'

// useStyles will input a props object
const useStyles = createUseStyles({
  NavBar: {
    textAlign: 'center',
  },

  TopBar: {
    backgroundColor: props => props.colors.primary,
    width: '100vw',
    height: '80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'absolute',
    top: '0px',
    left: '0px',
    userSelect: 'none',
  },

  SideBar: {
    backgroundColor: props => props.colors.secondary,
    height: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    position: 'absolute',
    top: '80px',
    left: '0px',
    userSelect: 'none',
  },
  
  AppContent: {
    backgroundColor: props => props.colors.tertiary,
    height: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'absolute',
    top: '80px',
  }
})

export default useStyles;