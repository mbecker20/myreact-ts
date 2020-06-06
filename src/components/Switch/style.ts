import {createUseStyles} from 'react-jss'
import { Colors } from '../../appColors'

const useJSS = createUseStyles({
  Bounder: {
    backgroundColor: (colors: Colors) => colors.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    margin: '10px',
    '&:hover': {
      cursor: 'pointer'
    },
  },

  Switch: {
    backgroundColor: (colors: Colors) => colors.secondary,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'flex-end',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    margin: '10px',
  },
})

export default useJSS;