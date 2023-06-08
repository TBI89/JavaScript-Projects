/// <reference path="jquery-3.7.0.js" />

"use strict";

// Document ready:
$(() => {

    // Getting a random color for etch div:
    function getRandomColor() {
        const redOrBlue = ["red", "blue"];
        const randomIndex = Math.floor(Math.random() * redOrBlue.length);
        const randomColor = redOrBlue[randomIndex];
        return randomColor;
    }

    // Display 15 red/blue boxes on the page: 
    let html =

        `<div class="${getRandomColor()}">1</div>
        <div class="${getRandomColor()}">2</div>
        <div class="${getRandomColor()}">3</div>
        <div class="${getRandomColor()}">4</div>
        <div class="${getRandomColor()}">5</div>
        <div class="${getRandomColor()}">6</div>
        <div class="${getRandomColor()}">7</div>
        <div class="${getRandomColor()}">8</div>
        <div class="${getRandomColor()}">9</div>
        <div class="${getRandomColor()}">10</div>
        <div class="${getRandomColor()}">11</div>
        <div class="${getRandomColor()}">12</div>
        <div class="${getRandomColor()}">13</div>
        <div class="${getRandomColor()}">14</div>
        <div class="${getRandomColor()}">15</div>`

    $("#divContainer").html(html);

    // On the first click, fade out blue boxes, and the second one - fade back in.
    $("#blueButton").click(() => {
        $(".blue").fadeToggle(2000);
        $("#blueButton").text("Fade In Blue Squares");
    });

    // Same for the red boxes:
    $("#redButton").click(() => {
        $(".red").fadeToggle(2000);
        $("#redButton").text("Fade In Red Squares");
    });

    // On click, display the number inside the div (using alert):
    $("div").click(function () { alert($(this).text()) });

});
