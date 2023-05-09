"use strict";

// Clothes array

const clothes = [
    {
        type: "Tank",
        size: "M",
        price: 30,
        color: "Black"
    },

    {
        type: "T-shirt",
        size: "XL",
        price: 10,
        color: "Red"
    },

    {
        type: "Skirt",
        size: "XS",
        price: 45,
        color: "Yellow"
    },

    {
        type: "Pants",
        size: "L",
        price: 15,
        color: "Blue"
    },

    {
        type: "Hoodie",
        size: "XXL",
        price: 60,
        color: "Green"
    }

];

console.log(clothes);

// Display all property's of all objects (nested loop):

for(const item of clothes) {
    for(const prop in item) {
        document.write(`${prop} --> ${item[prop]}<br>`);
    }
    document.write("<hr>");
}