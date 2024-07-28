import React from "react";

interface CellProps {
  value: string;
  onClick: () => void;
}

function Cell({ value, onClick }: CellProps) {
  return <div className={`cell ${value}`} onClick={onClick}></div>;
}

export default Cell;
