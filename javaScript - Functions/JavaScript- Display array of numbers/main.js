"use strict";

// Function that shows an array of numbers
function displayArr(numbers) {
for(let i = 0; i < numbers.length; i++) {
    document.write(numbers[i] + " ");
}
}

// Display "hard coded" array of numbers:
const arr = [1, 2, 3];
displayArr(arr);
document.write("<hr>");

// Print a random array:
const length = 7;
let randomArr = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
displayArr(randomArr);