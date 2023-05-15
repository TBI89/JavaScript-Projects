"use strict";

// Collect a number from the user:
let n = +prompt("Enter a number");

// Function that Prints a square based on the number the user entered:
function displaySquare() {
    for(let i = 1; i <= n; i++) {
        let row = "";
        for(let j = 1; j <= n; j++) {
        document.write(row + "* ");
        } 
        document.write(row + "<br>");
    }
    
}

displaySquare(n);