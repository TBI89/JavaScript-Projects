// Print positive, negative or zero v2

let positiveCount = "";
let negativeCount = "";
let zeroCount = "";
let num;
let breakingNum;

while(true) {
    num = +prompt("Enter a number :");

    if(num && num % 7 ===0){
        breakingNum = num
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

num = +prompt("Enter a number :");

document.write(`Positive numbers entered: ${positiveCount}<br>`);
document.write(`Negative numbers entered: ${negativeCount}<br>`);
document.write(`Zeros entered: ${zeroCount}<br>`);
document.write(`Breaking number: ${breakingNum}`);