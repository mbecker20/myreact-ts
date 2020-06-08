import { createUseStyles } from 'react-jss'
import { Colors } from '../appColors'

const useJSS = createUseStyles({
  NavBar: {
    textAlign: 'center',
  },

  TopBar: {
    backgroundColor: (colors: Colors) => colors.primary,
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
    zIndex: '100'
  },

  SideBar: {
    backgroundColor: (colors: Colors) => colors.secondary,
    height: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    textOrientation: 'upright',
    position: 'absolute',
    top: '80px',
    left: '0px',
    userSelect: 'none',
    zIndex: '99',
    boxSizing: 'borderBox',
  },
  
  AppContent: {
    backgroundColor: (colors: Colors) => colors.tertiary,
    height: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'absolute',
    top: '80px',
    overflow: 'hidden',
  },

  Router: {
    width: '100%',
    height: '100%',
  },
})

export default useJSS;