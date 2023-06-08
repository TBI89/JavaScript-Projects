/// <reference path="jquery-3.7.0.js" />

"use strict";

// Using IIFE in order to stay out of the window scope,
// Document ready:
$(() => {

    // On click, only the value in the box will pass to the next cell:
    $("#firstNameButton").click(() => {
        const firstName = document.getElementById("firstNameBox").value;
        $("#newFirstNameCell").text(firstName);
        $("#firstNameBox").hide();
    });

    $("#lastNameButton").click(() => {
        const lastName = document.getElementById("lastNameBox").value;
        $("#newLastNameCell").text(lastName);
        $("#lastNameBox").hide();
    });
});