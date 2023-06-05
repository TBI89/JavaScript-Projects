
// After 1 second delay, paint the text background color in red:
const redPar = document.getElementById("redPar");
redPar.addEventListener("click", function () {
   setTimeout(() => {
    this.style.backgroundColor = "red";
   }, 1000);
});

// After 1 second delay, paint the text background color in green:
const greenPar = document.getElementById("greenPar");
greenPar.addEventListener("click", function () {
   setTimeout(() => {
    this.style.backgroundColor = "green";
   }, 1000);
});

// After 1 second delay, paint the text background color in blue:
const bluePar = document.getElementById("bluePar");
bluePar.addEventListener("click", function () {
   setTimeout(() => {
    this.style.backgroundColor = "blue";
   }, 1000);
});

// After 1 second delay, paint the text background color in yellow:
const yellowPar = document.getElementById("yellowPar");
yellowPar.addEventListener("click", function () {
   setTimeout(() => {
    this.style.backgroundColor = "yellow";
   }, 1000);
});

// After 1 second delay, paint the text background color in purple:
const purplePar = document.getElementById("purplePar");
purplePar.addEventListener("click", function () {
   setTimeout(() => {
    this.style.backgroundColor = "purple";
   }, 1000);
});