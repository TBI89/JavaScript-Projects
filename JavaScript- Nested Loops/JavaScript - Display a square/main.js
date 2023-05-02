// Display a square made of "*" (based on the users input).

let n = +prompt("Enter a positive number: ");


for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {
        document.write(row + "* ");
    }

    document.write(row + "<br>");
}