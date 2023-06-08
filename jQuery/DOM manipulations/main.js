/// <reference path="jquery-3.7.0.js" />

"use strict";

// Document ready:
$(() => {

    // When the user clicks the button, the select box will fill up with numbers
    // Inside the range of the 2 numbers in the input box
    $("#numButton").click(() => {

        // Take values:
        const firstNum = +$("#firstNumBox").val();
        const secondNum = +$("#secondNumBox").val();

        // Empty array to hold the numbers within the range:
        const numRange = [];

        // Check witch number is larger:
        if (firstNum < secondNum) {
            for (let i = firstNum; i <= secondNum; i++) {
                numRange.push(i);
            }
        }
        else if (secondNum < firstNum) {
            for (let i = secondNum; i <= firstNum; i++) {
                numRange.push(i);
            }
        }

        // Display the new options in the select box:
        let html = "";
        for (const numbers of numRange) {
            html +=
                `<option>${numbers}</option>`;
        }
        $("#numList").html(html);
    });

});
