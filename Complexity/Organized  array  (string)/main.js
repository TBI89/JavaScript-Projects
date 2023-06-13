"use strict";

(() => {

    // Hard coded unorganized string array:
    const arr = ["AquaMan", "Batman", "Flash", "Green lantern", "Hulk", "SpiderMan"];
    const string = prompt("Enter some text..."); // Collect a string from the user.
    const index = arr.indexOf(string);
    getString(arr, string, index);

    // Search for the given string and send the appropriate message:
    function getString(arr, string, index) { // Binary search algorithm.

        // Define in what index to start / end the search:
        let startIndex = 0;
        let endIndex = arr.length - 1;

        do {// The complexity level is O(log n).

            const middleIndex = Math.floor((startIndex + endIndex) / 2); // Define the middle index.

            if (arr[middleIndex] === string) {// Check if the string is located in the middle index.
                 alert(`The text ${string} exist on index ${index}`);
            }

            if (string < arr[middleIndex]) {// Check if the string is located before the mid point.
                endIndex = middleIndex - 1;
            }
            else {
                startIndex = middleIndex + 1; // Check if located after the mid point.
            }
        } while (startIndex <= endIndex);

        return alert(`The text ${string} doesn't exist...`); // Message that the value isn't found.

    }

})();