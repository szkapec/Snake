import React from 'react';
import {COLS,CELL, ROWS, BODY, FOOD} from './const';

function Cells({ board, handleKey }) {
    const cells = [];
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const value = board[COLS * row + col]; //pobrana komorka
            const key = COLS * row + col //od 0 do 400  ---cols = 20 --row=20 ---col = 0 do 19
            const className = value === BODY ? 'body-cell' : value === FOOD ? 'food-cell' : 'cell';
            cells.push(<div key={key} className={className}/>)
        }
    }

    return (
        <div 
        tabIndex={0}
        onKeyDown={handleKey}
        style={{width:COLS*CELL, height: ROWS*CELL}}
        className="board">
            {cells}
        </div>
    )
}

export default Cells