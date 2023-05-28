"use strict";

// Empty array:
const geolocation = [];

// Push 20 random objects (points: x, y) to the array:
for (let i = 1; i <= 20; i++) {
    const points = {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100)
    };
    geolocation.push(points);
}

// Display the values:
for (const item of geolocation) {
    document.write(`X: ${item.x}, Y: ${item.y}<br>`);
}
document.write("<hr>");

// Display the first point on witch x is larger then y:
const xIsBigger = geolocation.find(item => item.x > item.y);
document.write(`The first point when x is larger then y is: ${xIsBigger.x}, ${xIsBigger.y}<hr>`);

// Display the first point on witch y is larger then 50:
const yBiggerThenFifty = geolocation.find(item => item.y > 50);
document.write(`The first point when y is larger then 50 is: ${yBiggerThenFifty.x}, ${yBiggerThenFifty.y}<hr>`);

// Display all the points witch x is odd:
const xIsOdd = geolocation.filter(item => item.x % 2 !== 0);
for (const item of xIsOdd) {
    document.write(`Points were X is odd: ${item.x}, ${item.y}<br>`);
}
document.write("<hr>");

// Display all the points witch y is larger then 50:
const yBiggerPoints = geolocation.filter(item => item.y > 50);
for (const item of yBiggerPoints) {
    document.write(`Points were y is larger then 50: ${item.x}, ${item.y}<br>`);
}
document.write("<hr>");

// Print the index of the first point on witch x is larger then 50:
const xBiggerIndex = geolocation.findIndex(item => item.x > 50);
document.write(`The index of the first point when x is larger then 50 is: ${xBiggerIndex}<hr>`);

// Show the distance from the the axis origin (0, 0):
for (const item of geolocation) {
    const distance = Math.sqrt(item.x ** 2 + item.y ** 2);
    document.write(`The distance between point ${item.x}, ${item.y} to the origin is: ${distance.toFixed(2)}<br>`);
}
document.write("<hr>");

// Print the smallest x on the array:
const xMin = geolocation.reduce((smallest, current) => {
    return current.x < smallest.x ? current : smallest;
});
document.write(`The smallest x is: ${xMin.x}<hr>`);

// Print the point (object) with the smallest x on the array:
const xMinPoint = geolocation.reduce((smallest, current) => {
    return current.x < smallest.x ? current : smallest;
});
document.write(`The point with the smallest x is: ${xMinPoint.x}, ${xMinPoint.y}`);
