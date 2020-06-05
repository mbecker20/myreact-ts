import React from 'react';
import useJSS from './style'
import colors from '../../appColors';

interface Props {
  children: React.ReactNode
}

function ChapterViewerContainer({ children }: Props) {
  const classes = useJSS(colors)
  return (
    <div className={classes.CVContainer}>
      {children}
    </div>
  );
}

export default ChapterViewerContainer;