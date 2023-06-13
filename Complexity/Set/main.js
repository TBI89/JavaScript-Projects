"use strict";

(() => {

    // Creating a set & adding 1000 random numbers from 0 to 20: 
    const numbers = new Set();

    for (let i = 1; i <= 1000; i++) {
        numbers.add(Math.floor(Math.random() * 20));
    }

    // Display the numbers:
    console.log(numbers); //The set actually contains 20 items.

    // Get a number from the user, and check if it exist in set: sent an appropriate message:
    const checkNumber = +prompt("Enter a number");
    if(numbers.has(checkNumber)) {// Search complexity is O(1).
        alert(`The number ${checkNumber} exist in the set!`);
    }
    else {
        alert(`The number ${checkNumber} doesn't exist in the set...`);  
    }

})();