// Print the breaking number

let positiveCount = "";
let negativeCount = "";
let zeroCount = "";
let num;

while (num !== 0) {
    num = +prompt("Enter a number");

    if (num > 0) {
        positiveCount += num + ",";
    }

    else if (num < 0) {
        negativeCount += num + ",";
    }
}

num = +prompt("Enter a number");

if (num === 0) {
    zeroCount += num + "";
}


document.write(`Positive numbers entered: ${positiveCount}<br>`);
document.write(`Negative numbers entered: ${negativeCount}<br>`);
document.write(`Zeros entered: ${zeroCount}<br>`);