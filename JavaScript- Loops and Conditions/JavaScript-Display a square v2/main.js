// Display a square v2

let n = +prompt("Enter a number");

for (let i = 1; i <= n; i = i + 1) {
    let row = "";

    for (let j = n; j >= 1; j = j - 1) {
        row = row + j;
    }
    document.write(row + "<br>");
}