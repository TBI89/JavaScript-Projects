"use strict";

// Array of 20 random numbers ( whole, between 1 to 100):
const arr = [];
const n = 0;
for (let i = 1; i <= 20; i++) {
    const n = Math.floor(Math.random() * 100);
    document.write(n + "<br>"); // Display the array (one item per line).
    arr.push(n);
}
document.write("<hr>");

// Print the first even number:
let firstEven = arr.find(n => n % 2 === 0);
document.write(`First even number is: ${firstEven}<hr>`);

// Print the first number that's larger then 50:
let firstNumBiggerThenFifty = arr.find(n => n > 50);
document.write(`First number that's larger then 50 is: ${firstNumBiggerThenFifty}<hr>`);

// Print all the odd numbers:
let allOdds = arr.filter(n => n % 2 !== 0);
document.write(`All the odd numbers in the array: ${allOdds}<hr>`);

// Print all the odd numbers that are larger then 50:
let allNumBiggerThenFifty = arr.filter(n => n > 50);
document.write(`All the numbers that are larger then 50: ${allNumBiggerThenFifty}<hr>`);

// Print the index of the first number that's larger then 50:
let firstIndexBiggerThenFifty = arr.findIndex(n => n > 50);
document.write(`Index of the first number that's larger then 50: ${firstIndexBiggerThenFifty}<hr>`);

// For etch number in array, mark if even or odd:
arr.forEach(n => {
    if (n % 2 === 0) {
        document.write(`${n} is even<br>`);
    }
    else {
        document.write(`${n} is odd<br>`);
    }
});
document.write("<hr>");

// Display The smallest number:
let min = arr.reduce((smallest, current) => {
    return current < smallest ? current : smallest;
});
document.write(`The smallest number is: ${min}<hr>`);

// Display the largest number:
let max = arr.reduce((largest, current) => {
    return current > largest ? current : largest;
});
document.write(`The smallest number is: ${max}<hr>`);