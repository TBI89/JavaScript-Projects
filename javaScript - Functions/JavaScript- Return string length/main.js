"use strict";

// Function that calculates the length of a string array and display the longest string:
function getMaxString(stringArr) {
    let max = -Infinity;
    for (const item of stringArr) {
        let length = item.length;
        if(length > max) {
            max = length
        }
    }
    return max;
}

// Calling the function three times, using a different hard coded values:
const arr1 = ["Hello world!" , "javaScript", "is the first programming", "language i learned."];
const max1 = getMaxString(arr1);
document.write(`The longest string is: ${max1}`);
document.write("<hr>");

const arr2 = ["I really enjoy" , "the problem solving", "part of programming in general."];
const max2 = getMaxString(arr2);
document.write(`The longest string is: ${max2}`);
document.write("<hr>");

const arr3 = ["I learned it all", "on John Bryce Collage", "in Israel!"];
const max3 = getMaxString(arr3);
document.write(`The longest string is: ${max3}`);