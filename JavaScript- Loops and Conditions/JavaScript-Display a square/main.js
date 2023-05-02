// Display a square

let n = +prompt("Enter a number");

for (let i = 1; i <= n; i = i + 1) {
    let row = "";

    for (let j = 1; j <= n; j = j + 1) {
        row = row + "* ";
    }
    document.write(row + "<br>");
}