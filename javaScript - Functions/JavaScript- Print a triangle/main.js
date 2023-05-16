"use strict";

// Function that displays a triangle made of "*": 
function displayTriangle(n) {
    for (let i = n; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            document.write("* ");
        }
        document.write("<br>");
    }
}

//Collect a number from the user and call the function:
let n = +prompt("Enter a number");
displayTriangle(n);
