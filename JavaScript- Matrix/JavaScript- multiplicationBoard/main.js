"use strict";

const multiplicationBoard = [];
const boardRows = 10;
const boardCols = 10;

for (let i = 1; i <= boardRows; i++) {
    const row = [];
    for (let j = 1; j <= boardCols; j++) {
        row.push(i * j);
    }
    multiplicationBoard.push(row);
}

for (let i = 0; i < boardRows; i++) {
    for (let j = 0; j < boardCols; j++) {
        document.write(multiplicationBoard[i][j] + " ");
    }
    document.write("<br>");
}
document.write("<hr>");

let sum = 0;
let count = 0;
for(let i = 0; i < multiplicationBoard.length; i++) {
    for(let j = 0; j < multiplicationBoard[i].length; j++) {
        sum += multiplicationBoard[i][j];
        count++;
    }
}
document.write(`Sum of all numbers: ${sum}`);