"use strict";

(() => {

    // Hard coded unorganized string array:
    const arr = ["i'm", "gaining", "experience", "on complexity", "exercises", "and it's super fun!🫠"];
    const string = prompt("Enter some text..."); // Collect a string from the user.
    const index = arr.indexOf(string);
    getString(arr, string, index);

    // Search for the given string and send the appropriate message:
    function getString(arr, string, index) {
        for (let i = 0; i < arr.length; i++) {// Complexity level: O(n)
            if (arr[i] === string) {
                alert(`The text ${string} exist on index ${index}`);
                return
            }
        }
        alert(`The text ${string} doesn't exist....`);
    }

})();

