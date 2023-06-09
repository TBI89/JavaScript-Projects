"use strict";

// Function that Prints a rectangle:
function displayRectangle(height, width) {
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= width; j++) {
            document.write(row + "* ");
        }
        document.write(row + "<br>");
    }

}

// Call once using hard-coded values:
displayRectangle(5, 8);
document.write("<hr>");

// Call again using random values:
let randomHeight = Math.floor(Math.random() * 100);
let randomWidth = Math.floor(Math.random() * 100);
displayRectangle(randomHeight, randomWidth);
document.write("<hr>");

// Finally, call it based on values collected from the user:
let heightByUser = +prompt("Enter the rectangle height");
let widthByUser = +prompt("Enter the rectangle width");
displayRectangle(heightByUser, widthByUser);