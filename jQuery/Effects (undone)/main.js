/// <reference path="jquery-3.7.0.js" />

"use strict";

// Document ready:
$(() => {

    $("#blueButton").click(() => {
        $(".blue").fadeOut(2000);
        $("#blueButton").text("Fade In Blue Squares");
    });

    // UNDONE!

});
