"use strict";

// Function that display a string 10 times:

function displayString(message) {
    for (let i = 1; i <= 10; i++) {
        document.write(" ");
    }
    document.write(message);
}

// Display via "Hard coded string":

displayString("Some random words...<br>");
document.write("<hr>")

// Display a string that collected from the user:

displayString(prompt("Type some random words..."));