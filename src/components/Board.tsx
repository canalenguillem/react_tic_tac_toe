import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] !== "") return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "x" : "circle";
    setBoard(newBoard);
    console.log("clicado " + index + " juega " + newBoard[index]);

    setXIsNext(!xIsNext);
  };
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

export default Board;
