// Display positive or negative numbers

let num = prompt("Enter a number");
let numbers = [];

while (num !== "0") {
    if (num > 0) {
        numbers.push({ value: num, sign: "positive" });
    } else if (num < 0) {
        numbers.push({ value: num, sign: "negative" });
    }
    num = prompt("Enter a number");
}

document.write("Numbers entered:<br>");
numbers.forEach(function (number) {
    document.write(number.value + " (" + number.sign + ")<br>");
});
