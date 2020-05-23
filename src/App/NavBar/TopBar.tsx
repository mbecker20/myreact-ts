import React from 'react';

function TopBar({ classes, text }) {
  return (
    <div className={classes.TopBar}>
      {text}
    </div>
  )
}

export default TopBar