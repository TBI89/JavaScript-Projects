/// <reference path="jquery-3.7.0.js" />

"use strict";

// Document ready:
$(() => {

    // Get a random color (from all color ranges):
    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Get a random number (from 1 to 100):
    function generateNumber() {
        const num = Math.floor(Math.random() * 100);
        return num;
    }

    // On click, impact each div randomly:
    $("#randomButton").click(() => {

        // Change the color
        $("div").each(function () {
            const randomColor = generateColor();
            $(this).css("background-color", randomColor);
        });

        // Change the number:
        $("div").each(function () {
            const randomNumber = generateNumber();
            $("div").text(randomNumber);

        });

    });

});
