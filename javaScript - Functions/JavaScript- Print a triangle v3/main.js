"use strict";

// Function that displays a triangle made of numbers in a pyramid style order: 
function displayTriangle(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " ");
        }
        for(let j = i - 1; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }

}

//Collect a number from the user and call the function:
let n = +prompt("Enter a number");
displayTriangle(n);