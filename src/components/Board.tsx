import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  return (
    <>
      {board.map((cell, index) => (
        <Cell />
      ))}
    </>
  );
}

export default Board;
