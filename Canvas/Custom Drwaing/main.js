// Get HTML canvas:
const myCanvas = document.getElementById("myCanvas");
const paint = myCanvas.getContext("2d");

// Fix the painter position on the canvas:
const bodyRect = document.body.getBoundingClientRect();
const canvasRect = myCanvas.getBoundingClientRect();
const leftOffSet = canvasRect.left - bodyRect.left;
const topOffset = canvasRect.top - bodyRect.top;

// Choose the painter color:
let painterColor = "black";
function changeColor(color) {
    painterColor = color;
}

// Draw with mouse left (constant) click:
function draw() {
    if (event.buttons === 1) {
        paint.lineTo(event.clientX - leftOffSet, event.clientY - topOffset);
        paint.stroke();
    }
}

// Prevent the painter from "jumping" between locations:
function markPoint() {
    paint.strokeStyle = painterColor;
    paint.beginPath();
    paint.moveTo(event.clientX - leftOffSet, event.clientY - topOffset);
}

// Choose the line width:
paint.lineWidth = 2;
function changeLineWidth(width) {
    paint.lineWidth = width
}


