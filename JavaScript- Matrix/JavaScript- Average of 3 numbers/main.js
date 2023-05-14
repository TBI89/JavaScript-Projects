"use strict";

// Calculate the average of 3 numbers with a function:

function getAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let avg = sum / 3;
    document.write(avg.toFixed(2) + "<br>");
}

// Hard coded numbers:

getAverage(10, 20, 30);
document.write("<hr>");

// By the user:

let numByUser1 = +prompt("Enter the first number");
let numByUser2 = +prompt("Enter the second number");
let numByUser3 = +prompt("Enter the third number");

getAverage(numByUser1, numByUser2, numByUser3);
document.write("<hr>");

// From 3 random numbers:

let randomNumber1 = Math.floor(Math.random() * 1000);
let randomNumber2 = Math.floor(Math.random() * 1000);
let randomNumber3 = Math.floor(Math.random() * 1000);

getAverage(randomNumber1, randomNumber2, randomNumber3);