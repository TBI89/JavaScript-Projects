"use strict";

// Function that calculate the average of an array of numbers:
function getAverage(numArr) {
    let sum = 0;
    for (const item of numArr) {
        sum += item;
    }
    let avg = sum / numArr.length;
    return avg;
}

// Calling the function three times, using a different hard coded values:
const arr1 = [10, 20, 30];
const avg1 = getAverage(arr1);
document.write(`First array's numbers are: ${arr1}<br>First array's average is: ${avg1}<br>`);
document.write("<hr>");

const arr2 = [40, 50, 60];
const avg2 = getAverage(arr2);
document.write(`Second array's numbers are: ${arr2}<br>Second array's average is: ${avg2}<br>`);
document.write("<hr>");

const arr3 = [70, 80, 90];
const avg3 = getAverage(arr3);
document.write(`Third array's numbers are: ${arr3}<br>First array's average is: ${avg3}<br>`);