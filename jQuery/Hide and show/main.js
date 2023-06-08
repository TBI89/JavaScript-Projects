/// <reference path="jquery-3.7.0.js" />

"use strict";

// Document ready:
$(() => {

    // When the user clicks once, the blue boxes will fade out, in the second click they will fade back in:
    $("#blueButton").click(() => {
        $(".blue").fadeToggle(2000);
        $("#blueButton").text("Fade In Blue Squares");
    });

    // Same, but with the red boxes:
    $("#redButton").click(() => {
        $(".red").fadeToggle(2000);
        $("#redButton").text("Fade In Red Squares");
    });

});
