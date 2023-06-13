"use strict";

(() => {

    // Unorganized string array:
    const arr = ["i'm", "gaining", "experience", "on complexity", "exercises", "and it's super fun!🫠"];

    // Collect a string from the user:
    const string = prompt("Enter some text...");
    getString(arr, string);

    // Search for the given string and send the appropriate message:
    function getString(arr, string) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === string) {
                alert(`The text ${string} exist!`);
                return
            }
        }
        alert(`The text ${string} doesn't exist....`);
    }

})();

