"use strict";

// Function that displays a triangle made of "*"(base on top): 
function displayTriangle1(n) {
    for (let i = n; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            document.write("* ");
        }
        document.write("<br>");
    }
}

// Function that displays a triangle made of "*"(base at the bottom): 
function displayTriangle2(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
}

//Collect a number from the user and call the function:
let n = +prompt("Enter a number");
displayTriangle1(n);
displayTriangle2(n);