"use strict";

// Function that displays the larger number: 

function printMaxNum(num1, num2, num3) {
    let max = -Infinity;
    if (num1 > num2 && num1 > num3) {
        max = num1
        document.write(`The largest number is :${num1}<br>`);
    }
    else if (num2 > num1 && num2 > num3) {
        max = num2
        document.write(`The largest number is :${num2}<br>`);
    }
    else {
        max = num3
        document.write(`The largest number is :${num3}<br>`);
    }
}

// Call once using a "hard coded" numbers:

printMaxNum(42, 7, 18);
document.write("<hr>");

// Call again but with values collected from the user:

let numFromUser1 = +prompt("Enter the first number");
let numFromUser2 = +prompt("Enter the second number");
let numFromUser3 = +prompt("Enter the third number");

printMaxNum(numFromUser1, numFromUser2, numFromUser3);
document.write("<hr>");

// Finally call with random numbers:

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);
let randomNumber3 = Math.floor(Math.random() * 100);

printMaxNum(randomNumber1, randomNumber2, randomNumber3);