// Print power

let num = +prompt("Enter a number: ");
let result = 0;

while (num >= 0) {
    result = num ** 3;
    document.write(`${num ** 3}<br>`);
    result = result + 1;
    num = +prompt("Enter a number :");
}

