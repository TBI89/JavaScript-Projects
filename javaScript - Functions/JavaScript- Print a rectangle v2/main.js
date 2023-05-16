"use strict";

// Function that Prints an empty rectangle:
function displayRectangle(height, width) {
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= width; j++) {
           const borders = (i === 1 || i === height || j === 1 || j === width) ? "* " : "&nbsp;&nbsp";
           document.write(borders);
        }
       document.write("<br>");
    }

}

// Call once using hard-coded values:
displayRectangle(5, 8);
document.write("<hr>");

// Call again using random values:
let randomHeight = Math.floor((Math.random() * 3) + 3);
let randomWidth = Math.floor((Math.random() * 5) + 5);
displayRectangle(randomHeight, randomWidth);
document.write("<hr>");

// Finally, call it based on values collected from the user:
let heightByUser = +prompt("Enter the rectangle height");
let widthByUser = +prompt("Enter the rectangle width");
displayRectangle(heightByUser, widthByUser);