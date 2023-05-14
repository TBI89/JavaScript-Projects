"use strict";

// Function that display emojis on the screen (based on a numbers between 1-5):
function displayEmoji(num) {
    let emoji
    switch (num) {
        case 1:
            emoji = "🙂";
            break;
        case 2:
            emoji = "😔";
            break;
        case 3:
            emoji = "😉";
            break;
        case 4:
            emoji = "😎";
            break;
        case 5:
            emoji = "😲";
            break;
        default:
            emoji = "Please enter only numbers between 1 to 5."
    }
    document.write(emoji + " ");
}

// Calling it once, using a "hard coded" value:
displayEmoji(2);
document.write("<hr>");

// Calling the function again, using a collected value from the user:
let numFromUser = +prompt("Enter a whole and positive number between 1 to 5");
displayEmoji(numFromUser);
document.write("<hr>");

// Call using a random number:
let randomNum = Math.floor(Math.random() * 5) + 1;
displayEmoji(randomNum);
document.write("<hr>");

// Another function that displays all emojis, using the previous function:
function displayAllEmojis() {
    for (let i = 1; i <= 5; i++) {
        displayEmoji(i);
    }
}

displayAllEmojis();
document.write("<hr>");

// Creating a different function that using the first one to display 100 random emojis:
function displayRandomEmojis() {
    for (let i = 1; i <= 100; i++) {
        let randomEmoji = Math.floor(Math.random() * 5) + 1;
        displayEmoji(randomEmoji);
    }

}

displayRandomEmojis();