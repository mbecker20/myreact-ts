import {createUseStyles} from 'react-jss'
import { Theme } from '../../appColors'

const useStyles = createUseStyles({
  Button: {
    backgroundColor: (theme: Theme) => theme.colors.secondary,
    position: 'relative',
    display: 'flex',
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
      cursor: 'pointer'
    },
    userSelect: 'none',
    margin: '10px',
  },
})

export default useStyles;