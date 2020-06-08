import React from 'react'
import useJSS from './style'
import { ChessBoard } from '../types';
import { TextButton } from '../../all'
import { restoreFromMove } from '../helpers/moveList';

interface Props {
  chessBoard: ChessBoard
  reRender: () => void
}

interface NavButtonStyle {
  width: string,
  height: string,
  borderRadius: string,
}

const navButtonStyle: NavButtonStyle = {
  width: '6vmin',
  height: '4vmin',
  borderRadius: '5px',
}

function NavButtons({ chessBoard, reRender }: Props) {
  const classes = useJSS()

  function navBack() {
    chessBoard.currentMove--
    if (chessBoard.currentMove < 0) {
      chessBoard.currentMove = 0
      const move = chessBoard.moveList[chessBoard.currentMove]
      console.log(move)
      restoreFromMove(chessBoard, move)
      chessBoard.highlightedTiles = []
    } else {
      const move = chessBoard.moveList[chessBoard.currentMove]
      restoreFromMove(chessBoard, move)
      chessBoard.highlightedTiles = [move.start, move.end]
      console.log(move)
    }
    reRender()
    console.log()
  }

  function navForward() {
    chessBoard.currentMove++
    if (chessBoard.currentMove > chessBoard.moveList.length - 1) {
      chessBoard.currentMove = chessBoard.moveList.length - 1
    }
    const move = chessBoard.moveList[chessBoard.currentMove]
    restoreFromMove(chessBoard, move)
    chessBoard.highlightedTiles = [move.start, move.end]
    reRender()
    console.log(chessBoard.currentMove)
  }

  return (
    <div className={classes.NavButtonBounder}>
      <TextButton
        text='<'
        onClick={navBack}
        style={navButtonStyle}
      />
      <TextButton
        text='>'
        onClick={navForward}
        style={navButtonStyle}
      />
    </div>
  );
}

export default NavButtons;