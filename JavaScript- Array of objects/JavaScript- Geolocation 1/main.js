"use strict";

// Array of objects:

const geolocation = [
    {
        latitude: prompt("Enter your latitude: "),
        longitude: prompt("Enter your longitude: ")
    },
    {
        latitude: prompt("Enter your latitude: "),
        longitude: prompt("Enter your longitude: ")
    },
    {
        latitude: prompt("Enter your latitude: "),
        longitude: prompt("Enter your longitude: ")
    }
];

console.log(geolocation);

// Display the data collected from the user:

for (const item of geolocation) {
    for (const prop in item) {
        document.write(`${prop} --> ${item[prop]}<br>`)
    }
    document.write("<hr>");
}