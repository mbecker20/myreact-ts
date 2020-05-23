import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Button: {
    backgroundColor: props => props.colors.secondary,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
      cursor: 'pointer'
    },
    userSelect: 'none',
  },
})

export default useStyles;