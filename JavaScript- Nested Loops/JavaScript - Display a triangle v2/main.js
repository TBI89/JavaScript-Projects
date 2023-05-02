// Display a triangle made of increasing numbers (based on the users input).

let n = +prompt("Enter a positive number: ");

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}