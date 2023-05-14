"use strict";

// Function that displays strings:

function printMessage(string, count) {
    for (let i = 0; i < count; i++) {
        document.write("<br>");
        document.write(string);
    }
    document.write(string + " ")
}

// Display a "hard coded" string once

printMessage("I am a cool string😎");

// Display a string that was typed by the user (+ask how many times to print):

let stringByUser = prompt("Type a message...");
let count = parseInt(prompt("How many times do you want to see your message?"));
document.write("<hr>");

printMessage(stringByUser, count);