'use client';
import { useState } from 'react';

type Player = 'X' | 'O';

type SquareValue = Player | null;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares: SquareValue[]): Player | null {
  for (const [a, b, c] of winningCombos) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState<Array<SquareValue>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const winner = calculateWinner(squares);
  const currentPlayer: Player = xIsNext ? 'X' : 'O';

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const newSquares = squares.slice();
    newSquares[i] = currentPlayer;
    setSquares(newSquares);
    const newWinner = calculateWinner(newSquares);
    if (newWinner) {
      setScore({ ...score, [newWinner]: score[newWinner] + 1 });
    }
    setXIsNext(!xIsNext);
  }

  function renderSquare(i: number) {
    return (
      <button
        key={i}
        onClick={() => handleClick(i)}
        className="w-16 h-16 md:w-20 md:h-20 border border-gray-500 flex items-center justify-center text-2xl md:text-3xl"
      >
        {squares[i]}
      </button>
    );
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 text-xl">
        <div>Player X: {score.X}</div>
        <div>Player O: {score.O}</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((_, i) => renderSquare(i))}
      </div>
      <div className="space-y-2">
        {winner && <div className="text-lg">Winner: {winner}</div>}
        <button onClick={reset} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded">
          Reset Game
        </button>
      </div>
    </div>
  );
}
