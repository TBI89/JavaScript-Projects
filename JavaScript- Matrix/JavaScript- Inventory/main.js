"use strict";

// Collect from the user 3 items of etch kind:

const inventory = []

inventory.push(prompt("type your first shirt item"));
inventory.push(prompt("type your second shirt item"));
inventory.push(prompt("type your third shirt item"));

inventory.push(prompt("type your first pants item"));
inventory.push(prompt("type your second pants item"));
inventory.push(prompt("type your third pants item"));

inventory.push(prompt("type your first shoe item"));
inventory.push(prompt("type your second shoe item"));
inventory.push(prompt("type your third shoe item"));

inventory.push(prompt("type your first coat item"));
inventory.push(prompt("type your second coat item"));
inventory.push(prompt("type your third coat item"));

// Print the whole matrix:

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 1; j++) {
        document.write(inventory[i * 3] + ", " + inventory[i * 3 + 1] + ", " + inventory[i * 3 + 2] + "<br>");
    }
}
document.write("<hr>");

// Display the shortest string in the matrix:

let shortestString = Infinity;
let shortItem;

for (const item of inventory) {
    if (item.length < shortestString) {
        shortestString = item.length;
        shortItem = item;
    }
}
document.write(`The shortest item name is: ${shortItem}`);
document.write("<hr>");

// Display the longest string in the matrix:

let longString = -Infinity;
let longItem = [];

for (const item of inventory) {
    if (item.length > longString) {
        longString = item.length;
        longItem = [item];
    }
    else if (item.length === longString) {
        longItem.push(item);
    }
}
document.write(`The longest item name is: ${longItem}`);
document.write("<hr>");