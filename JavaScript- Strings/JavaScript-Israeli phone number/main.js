"use strict";

// Collect from the user an israeli phone number:

const phoneNumber = prompt("Enter your phone number: ");

// Display a message if the number is legal or not (10 numbers and start with "05"):

if (phoneNumber.length === 10 && phoneNumber.startsWith("05") && phoneNumber.match(0 - 9)) {
    alert("The phone number is legal");
}
else {
    alert("The phone number is illegal");
}