// Sum of 4 numbers

let n, sum = 0;

for (i = 1; i <= 4; i++) {
    n = parseInt(prompt("Enter a number"));
    sum = sum + n;
}

document.write("Sum: " + sum);

