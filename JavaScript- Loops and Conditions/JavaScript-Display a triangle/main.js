// Display a triangle

let n = +prompt("Enter a number: ");
let output = "";

for (let i = 1; i <= n; i = i + 1) {
    let row = "";

    for (let j = 1; j <= n; j = j + 1) {
        row += " ";
    }

    for (let k = 1; k <= i * 2-1; k = k + 1) {
        row += "*";
    }


    output += row + "<br>";

}

document.write(output);