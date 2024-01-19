import React, { useState } from 'react'
import './App.css'


export default function TicTacToe() {
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [whoseTurn,setWhoseturn]=useState(true);
  const winner=calculateWinner(squares);

  const calculateWinner=(squares)=>{
    const lines=[
    // _ _ _ _
    // |0|1|2|
    // _ _ _ _
    // |3|4|5|
    // _ _ _ _
    // |6|7|8|
    // _ _ _ _
    [0, 1, 2],//al of this are winning combinations
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      return null;
  }

  const handleClick=(index)=>{
// If whoseTurn is true (meaning it's someone's turn) or (||) there is already a winner 
// (meaning the game has been won), the condition is considered true.
// If both whoseTurn and winner are false, the condition is considered false.
    if(whoseTurn[index] || winner)
    {
      return;
    }
    const newSquares=squares.slice();
    newSquares[index]=whoseTurn?'X':'O';
    setSquares(newSquares);
    setWhoseturn(!whoseTurn)
  }
  const resetGame=()=>{
    setSquares(Array(9).fill(null));
    setWhoseturn(true);
  }

  function Square({ value, onClick }) {
    return (
      <div className="square" style={{ ...squareStyle, backgroundColor: value ? '#2196F3' : '#ddd' }} onClick={onClick}>
        {value}
      </div>
    );
  }
}
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={containerStyle} className="gameBoard">
    <div id="statusArea" className="status" style={instructionsStyle}>
      {status}
    </div>
    <button style={buttonStyle} onClick={resetGame}>
      Reset
    </button>
    <div style={boardStyle}>
      {Array(3)
        .fill(null)
        .map((_, rowIndex) => (
          <div key={rowIndex} className="board-row" style={rowStyle}>
            {Array(3)
              .fill(null)
              .map((_, colIndex) => {
                const index = rowIndex * 3 + colIndex;
                return <Square key={index} value={squares[index]} onClick={() => handleClick(index)} />;
              })}
          </div>
        ))}
    </div>
  </div>
  )
}
