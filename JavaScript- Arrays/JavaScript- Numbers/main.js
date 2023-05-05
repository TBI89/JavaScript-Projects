// Numbers

// Empty array:

const numbers = [];

// Add 100 random numbers to the array:

for (let i = 1; i <= 100; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    numbers.push(num);
}

// Display the values:

for (let i = 0; i < numbers.length; i++) {
    document.write(numbers[i] + "| ");
}

document.write("<hr>");

// Display in a reverse order:

for (let i = numbers.length - 1; i > 0; i--) {
    document.write(numbers[i] + "| ");
}

document.write("<hr>");

// Print sum of all numbers (using for-of loop):

let sum = 0;
for (const item of numbers) {
    sum += item;
}
document.write(`Sum: ${sum}<br>`);

document.write("<hr>");

// Print average all numbers (with for-of loop again):

const avg = sum / numbers.length;

document.write(`Average: ${avg}<br>`);

document.write("<hr>");

// Print even numbers only:

for (const item of numbers) {
    if (item % 2 === 0)
        document.write(item + "| ");
}

document.write("<hr>");

// Print how many odd numbers are (i):

let totalOdds = 0;
for (const item of numbers) {
    if (item % 2 !== 0)
        totalOdds++
}
document.write("Number of odds: " + totalOdds);

document.write("<hr>");

// Print the biggest number:


let max = -Infinity;
for (const item of numbers) {
    if (max < item) {
        max = item
    }
}
document.write(`The biggest number is: ${max}`);

document.write("<hr>");

// Print the smallest number: 

let min = Infinity;
for (const item of numbers) {
    if (min > item) {
        min = item
    }
}
document.write(`The smallest number is: ${min}`);

document.write("<hr>");

// Print all the numbers that are bigger then the average:

let biggerThenAvg = avg;
for (const item of numbers) {
    if (biggerThenAvg > item) {
        biggerThenAvg = item
    }
}
document.write(biggerThenAvg + "| ");

document.write("<hr>");
