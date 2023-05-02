// Display a square made of decreasing numbers (based on the users input). 

let n = +prompt("Enter a positive number: ");

for (let i = n; i >= 1; i--) {

    for (let j = n; j >= 1; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}