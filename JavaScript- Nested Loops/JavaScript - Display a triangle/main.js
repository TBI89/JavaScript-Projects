// Display a triangle made of "*" (based on the users input).

let n = +prompt("Enter a positive number: ");

for (let i = 1; i <= n; i++) {
    let row = "";
    
    for (let j = 1; j <= i; j++) {
        document.write(row + "* ")
    }

    document.write(row +"<br>");
}