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