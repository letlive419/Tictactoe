import React, { useState } from "react";


function TicTacToe() {
    const [xTurn, setXTurn] = useState(true);
    const [win, setWin] = useState([["","",""],["","",""],["","",""]]);
    const [won, setWon] = useState(false)
    const [tie, setTie] = useState(false)

    function handleClick(event) {
        xTurn ? setXTurn(false) : setXTurn(true)
        xTurn ? event.target.textContent = "X" : event.target.textContent = "O";
        gameOver(event.target.name,event.target.textContent);
        event.target.disabled = true;

        
    }
    function gameOver(buttonNumber,value) {
        const newArray = [...win];
        const row = Math.floor(parseInt(buttonNumber,10) / 3);
        const col = buttonNumber % 3;
        newArray[row][col] = value;
        setWin(newArray)
        
        for (let i = 0; i < win.length; i++){
            for (let j = 0; j < win[row].length; j++){
                if (
                    win[i][0] === value &&
                    win[i][1] === value &&
                    win[i][2] === value
                  ) {
                    setWon(true);
                  }
                  if (
                    win[0][j] === value &&
                    win[1][j] === value &&
                    win[2][j] === value
                ) {
                    setWon(true);
                }
            
        
            // Check diagonals for a win
            if (
                win[0][0] === value &&
                win[1][1] === value &&
                win[2][2] === value
            ) {
                setWon(true);
            }
            if (
                win[0][2] === value &&
                win[1][1] === value &&
                win[2][0] === value
            ) {
                setWon(true);
            }
            if (!won) {
                if (win[i][j] == "") {
                    setTie(false)
                }
                else {
                    setTie(true)
                }
            }
                
              
            }

        }
      
    }

  



    return (
        <div>
            <h1>{xTurn ? "X" : "O"}, it is your turn!</h1>
            <div className = "ticTacToe">
            <button onClick={handleClick} name="0" ></button>
            <button onClick={handleClick} name="1" ></button>
            <button onClick={handleClick} name="2" ></button>
            <button onClick={handleClick} name="3" ></button>
            <button onClick={handleClick} name="4" ></button>
            <button onClick={handleClick} name="5" ></button>
            <button onClick={handleClick} name="6" ></button>
            <button onClick={handleClick} name="7" ></button>
            <button onClick={handleClick} name="8" ></button>
            </div>
            <h1>{won ? "Player wins" : tie ? "Its a tie" : "No one has won, please keep playing"  } </h1>
        </div>
    )

}

export default TicTacToe