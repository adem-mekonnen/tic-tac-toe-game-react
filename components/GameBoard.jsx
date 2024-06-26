import { useState } from "react";

const initailGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  //   const [gameBoard, setGameBoard] = useState(initailGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((previousGameBoard) => {
  //       const newGameBoard = [
  //         ...previousGameBoard.map((innerArray) => [...innerArray]),
  //       ];

  //       newGameBoard[rowIndex][colIndex] = activePlayerSymbol;

  //       return newGameBoard;
  //     });
  //     onSelectSquare(rowIndex, colIndex);
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
