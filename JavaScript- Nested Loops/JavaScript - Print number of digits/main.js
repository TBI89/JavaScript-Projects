// Print number of digits

let n = prompt("Enter a number");
let numOfDigits;

while (n > 0) {
    n = prompt("Enter a number");
    numOfDigits = n.length;

    if (n <= 0) {
        break;
    }

    document.write(`Number of digits of ${n} is: ${numOfDigits}<br>`);
}