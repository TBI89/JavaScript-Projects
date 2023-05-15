"use strict";

// Collect the rectangle dimensions from the user:
let height = +prompt("Enter the rectangle height");
let width = +prompt("Enter the rectangle width");

// Function that Prints a rectangle based on the dimensions the user entered:
function displayRectangle() {
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= width; j++) {
            document.write(row + "* ");
        }
        document.write(row + "<br>");
    }

}

displayRectangle(height, width);