// Print sum of  digits

let n = prompt("Enter a number");
let sumOfDigits = 0;

while (n > 0) {
    for(i = 0; i < n.length; i++){
        sumOfDigits += parseInt(n[i]);
    }
    n = prompt("Enter a number");
}
document.write(`Sum of digits ${n} is: ${sumOfDigits}<br>`);
