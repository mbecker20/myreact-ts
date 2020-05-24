import React from 'react';

interface Classes {
  TopBar: any
}

interface Props {
  classes: Classes,
  text: string
}

function TopBar({ classes, text }: Props): JSX.Element {
  return (
    <div className={classes.TopBar}>
      {text}
    </div>
  )
}

export default TopBar