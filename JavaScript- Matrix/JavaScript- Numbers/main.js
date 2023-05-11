"use strict";

const matrix = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40]];

// Print the entire matrix:
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        document.write(`Row: ${i}, Col:${j}-->${matrix[i][j]}<br>`);
    }
}
document.write("<hr>");

// Print the sum of all values:
let sum = 0;
let count = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
        count++;
    }
}
document.write(`Sum of all matrix numbers: ${sum}`);
document.write("<hr>");

// Print the average of all values:
let avg = sum / count;
document.write(`Average of all matrix numbers: ${avg}`);
document.write("<hr>");

// Display the biggest number in the matrix:
let max = -Infinity;

for (const arr of matrix) {
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
}
document.write(`The biggest number is: ${max}`);
document.write("<hr>");

// Display the smallest number in the matrix:
let min = Infinity;

for (const arr of matrix) {
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
}
document.write(`The smallest number is: ${min}`);
document.write("<hr>");

// Display only numbers that divide by 7 (instead of the others show emoji):
for (const arr of matrix) {
    for (const num of arr) {
        if (num % 7 === 0) {
            document.write(num);
        }
        document.write("😉");
    }
}
document.write("<hr>");