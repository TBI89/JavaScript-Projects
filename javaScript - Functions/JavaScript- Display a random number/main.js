"use strict";

// Function that shows a random number within a range:
function displayRandomNum(start, end) {
    let num = Math.floor(Math.random() * (end - start + 1) + start);
    document.write(num + " ");
}

// Display based on "hard coded" range:
displayRandomNum(1, 3);
document.write("<hr>");

// Display based on ranges collected by the user:
let numByUser1 = +prompt("Enter a number to start the range");
let numByUser2 = +prompt("Enter a number to end the range");
displayRandomNum(numByUser1, numByUser2);
document.write("<hr>");

// Call the function 100 times, to display 100 random numbers within the range of 10 to -10:
for (let i = 1; i <= 100; i++) {
    let randomNum = Math.floor(Math.random() * (10 - (-10) + 1) - 10);
    displayRandomNum(randomNum, randomNum);
}
