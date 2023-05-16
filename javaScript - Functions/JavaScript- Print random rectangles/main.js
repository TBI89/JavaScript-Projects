"use strict";

// Function that Prints a rectangle:
function displayRectangle() {
    let height = Math.floor((Math.random() * 3) + 3);
    let width = Math.floor((Math.random() * 5) + 5);
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= width; j++) {
            document.write(row + "* ");
        }
        document.write(row + "<br>");
    }
    document.write("<hr>");

}

// collect a number (n) from the user and display "n" rectangles on the page:
let n = +prompt("Enter a number");
for(let i = 1; i <= n; i++) {
    displayRectangle(n);
}