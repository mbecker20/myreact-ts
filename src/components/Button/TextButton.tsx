import React from 'react';
import Button from './main'

interface Props {
  text: string,
  style?: object,
  onClick: () => void
}

function TextButton({ text, style, onClick }: Props) {
  return (
    <Button style={style} onClick={onClick}>
      {text}
    </Button>
  );
}

export default TextButton;