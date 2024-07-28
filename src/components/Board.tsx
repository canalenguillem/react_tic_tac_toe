import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell />
      ))}
    </div>
  );
}

export default Board;
