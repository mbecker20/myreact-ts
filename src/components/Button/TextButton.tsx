import React from 'react';
import Button from './main'

function TextButton({ text, style, onClick }) {
  return (
    <Button style={style} onClick={onClick}>
      {text}
    </Button>
  );
}

export default TextButton;