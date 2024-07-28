import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));

  const handleClick = (index: number) => {
    console.log("clicado " + index);
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
