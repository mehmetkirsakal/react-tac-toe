import React, { useState } from 'react'
import winnerService from '../winnerService';
import Board from './Board'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xNext, setxNext] = useState(true);
  const winner = winnerService(history[stepNumber]);
  const x0 = xNext ? "X" : "O";
  const styleWinner = winner ? `winner` : ``;
  let draw = Checkdraw();
  const styleDraw = draw ? `winner` : ``;
  

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = x0;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setxNext(!xNext);
  };

  function Checkdraw(){
    
    console.log("checkdraw")
    console.log(stepNumber)
    if(stepNumber == 9){
      console.log("checkdraw if")
      return true;
      
    }else{return false;}
    
    console.log(draw);

  }
  
  const jumpStep = (step) => {
    setStepNumber(step);
    setxNext(step % 2 === 0);

  
  };
  
  const moves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move} ` : "Go to start";
      return (
        
        <div className='mb-2'>
          <button onClick={() => jumpStep(move)}>
            {destination}
          </button>
          </div>
      
        
      );
    });

  

  console.log(history);
  return (
    
    <div className="text-center">
            <h1 className='text-white'>React Tac Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick}></Board>
            <div>
              <h3>History</h3>
              {moves()}
            </div>
            
            <h3 className={styleWinner}>
              {winner ? "Winner: " + winner  : "Next Player: " + x0}
              {winner ? (<button  className='btn btn-primary' onClick={() => jumpStep(0)}>Restart</button >) : ""}
            </h3>
            {Checkdraw()}
             <h3 className={styleDraw}>  
              {draw ? "Draw !! " : ""}
              {draw ? (<button  className='btn btn-primary' onClick={() => jumpStep(0)}>Restart</button >) : ""}
            </h3>
    </div>    
      
    
  )
}
