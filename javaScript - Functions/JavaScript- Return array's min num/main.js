"use strict";

// Function that finds the smallest number in the array:
function getMinNum(numArr) {
    let min = Infinity;
    for (const item of numArr) {
        if(item < min) {
            min = item;
        }
    }
    return min;
}

// Calling the function three times, using a different hard coded values:
const arr1 = [3, 5, 7, 9, 1];
const min1 = getMinNum(arr1);
document.write(`First array's numbers are: ${arr1}<br>First array's average is: ${min1}<br>`);
document.write("<hr>");

const arr2 = [2, 4, 13, 23, 0];
const min2 = getMinNum(arr2);
document.write(`Second array's numbers are: ${arr2}<br>Second array's average is: ${min2}<br>`);
document.write("<hr>");

const arr3 = [94, 28, 72, -5];
const min3 = getMinNum(arr3);
document.write(`Third array's numbers are: ${arr3}<br>First array's average is: ${min3}<br>`);