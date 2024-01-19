import React, { useState } from 'react';

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [whoseTurn, setWhoseTurn] = useState(true);
  const winner = calculateWinner(squares);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
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
    }
    return null;
  }

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = whoseTurn ? 'X' : 'O';
    setSquares(newSquares);
    setWhoseTurn(!whoseTurn);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWhoseTurn(true);
  };

  function Square({ value, onClick }) {
    return (
      <div className="square" style={{ backgroundColor: value ? '#2196F3' : '#ddd' }} onClick={onClick}>
        {value}
      </div>
    );
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const instructionsStyle = {
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    margin: '10px'
  };

  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '5px'
  };

  const rowStyle = {
    display: 'flex'
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${whoseTurn ? 'X' : 'O'}`;

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
  );
}
