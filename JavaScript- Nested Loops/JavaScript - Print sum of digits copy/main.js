// Print a pyramid made of numbers

let n = prompt("Enter a number:");
let pyramid = "";

for (let i = 1; i <= n; i++) {

    for (let j = n - i; j > 0; j--) {
        pyramid += "&nbsp; ";
    };

    for (let j = 1; j <= 1; j++) {
        pyramid += j + " ";
    };

    for (let j = i - 1; j >= 1; j--) {
        pyramid += j + " ";
    };
    pyramid += "<br>";
}

let textBox = document.getElementById("textBox");
textBox.innerHTML = `${pyramid}`;