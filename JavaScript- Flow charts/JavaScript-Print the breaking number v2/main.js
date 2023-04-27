// Print the breaking number v2

let num = 0;
let count = "";

while (num >= 0) {
    num = +prompt("Enter a number");
    if(num >= 0) {
    count += `${num ** 3}<br>`;
    }
}

document.write("Power of all numbers entered:" + count)