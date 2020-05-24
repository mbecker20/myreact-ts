import React, {useState} from 'react';
import useStyles from './style'
import { animated, useSpring } from 'react-spring'
import colors from '../../appColors'

const upShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
const downShadow = '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19)'

const upFont = 'calc(10px + 2vmin)'
const downFont = 'calc(8px + 2vmin)'

interface Props {
  style: object,
  onClick: () => void,
  children: any
}

function Button({ style, onClick, children }: Props) {
  const classes = useStyles({colors: colors})
  const [pressed, setPressed] = useState(false)
  const buttonSpring = useSpring({
    boxShadow: (pressed) ? downShadow : upShadow,
    fontSize: (pressed) ? downFont : upFont,
  })
  return (
    <animated.div 
      className={classes.Button} 
      style={Object.assign(buttonSpring, style)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => {
        setPressed(false)
        onClick()
      }}
    >
      {children}
    </animated.div>
  );
}

export default Button;