// Print positive, negative or zero

let positiveCount = "";
let negativeCount = "";
let zeroCount = "";
let num;

while(true) {
    num = +prompt("Enter a number :");

    if(num && num % 7 ===0){
        break;
    }

    if (num > 0) {
        positiveCount += num + ",";
    }

    else if (num < 0) {
        negativeCount += num + ",";
    }

    else {
        zeroCount += num + ",";
    }
}

document.write(`Positive numbers entered: ${positiveCount}<br>`);
document.write(`Negative numbers entered: ${negativeCount}<br>`);
document.write(`Zeros entered: ${zeroCount}<br>`);