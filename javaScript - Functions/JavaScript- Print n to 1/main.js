"use strict";

// Function that display numbers, in one line, on a descending order:
function printNto1(n) {
    for (let i = n; i >= 1; i--) {
        document.write(i + " ");
    }
}

// Check (hard coded):
printNto1(5);
document.write("<hr>");

// Function that displays a triangle made of numbers on a descending order:
function displayDescendingTriangle(size) {
    for (let i = size; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
}

// Check (hard coded):
displayDescendingTriangle(5);
