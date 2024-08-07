import React, { useState } from "react";
import Cell from "./Cell";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false); // Nuevo estado para empate

  const handleClick = (index: number) => {
    if (board[index] !== "" || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "x" : "circle";
    setBoard(newBoard);
    console.log("clicado " + index + " juega " + newBoard[index]);
    const calculatedWinner = calculateWinner(newBoard);
    if (calculatedWinner) {
      console.log("Winer is ", calculatedWinner);
      setWinner(calculatedWinner);
    } else if (checkDraw(newBoard)) {
      setIsDraw(true);
    }

    setXIsNext(!xIsNext);
  };

  const calculateWinner = (board: string[]): string | null => {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkDraw = (board: string[]): boolean => {
    return board.every((cell) => cell !== ""); // Verifica si todas las celdas están llenas
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleClick(index)} />
      ))}
      {winner && (
        <div className="winning-message show">
          <div>{winner === "x" ? "X Gana!" : "O Gana!"}</div>
          <button onClick={resetGame}>Reiniciar</button>
        </div>
      )}

      {isDraw && !winner && (
        <div className="winning-message show">
          <div>¡Empate!</div>
          <button onClick={resetGame}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default Board;
