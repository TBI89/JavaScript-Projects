"use strict";

function printMessage(string, count) {
    for (let i = 0; i < count; i++) {
        document.write("<br>");
        document.write(string);
    }
    document.write(string + " ")
}

printMessage("I am a cool string😎");

let stringByUser = prompt("Type a message...");
let count = parseInt(prompt("How many times do you want to see your message?"));
document.write("<hr>");

printMessage(stringByUser, count);