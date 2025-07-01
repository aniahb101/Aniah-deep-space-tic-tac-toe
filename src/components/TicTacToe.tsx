'use client'
import { useState } from 'react'

type Player = 'X' | 'O'
type SquareValue = Player | null

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function calculateWinner(squares: SquareValue[]): Player | null {
  for (const [a, b, c] of winningCombos) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default function TicTacToe() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [score, setScore] = useState({ X: 0, O: 0 })

  const winner = calculateWinner(squares)
  const currentPlayer: Player = xIsNext ? 'X' : 'O'

  function handleClick(i: number) {
    if (squares[i] || winner) return
    const newSquares = [...squares]
    newSquares[i] = currentPlayer
    setSquares(newSquares)

    const newWinner = calculateWinner(newSquares)
    if (newWinner) {
      setScore((prev) => ({
        ...prev,
        [newWinner]: prev[newWinner] + 1,
      }))
    }

    setXIsNext(!xIsNext)
  }

  function reset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="space-y-8 text-white">
      {/* Scoreboard */}
      <div className="flex justify-center gap-8 text-lg font-semibold">
        <div className="text-cyan-400">Player X: {score.X}</div>
        <div className="text-pink-400">Player O: {score.O}</div>
      </div>

      {/* Game Board Bubble Container */}
      <div className="p-6 sm:p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.08)] transition">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 justify-center">
          {squares.map((value, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`w-16 h-16 sm:w-20 sm:h-20 border border-gray-600 rounded-lg text-2xl sm:text-3xl font-bold flex items-center justify-center transition-all
                ${value === 'X' ? 'text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]' : ''}
                ${value === 'O' ? 'text-pink-400 drop-shadow-[0_0_8px_#ec4899]' : ''}
                ${!value ? 'hover:bg-white/5 hover:scale-105' : ''}
              `}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center space-y-3">
        {winner && (
          <div className="text-xl font-bold text-green-400 drop-shadow-[0_0_6px_#4ade80]">
            🎉 Winner: {winner}
          </div>
        )}
        <button
          onClick={reset}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md shadow-purple-400/40 transition"
        >
          Reset Game
        </button>
      </div>
    </div>
  )
}
