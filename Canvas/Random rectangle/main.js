
// Function that draws random rectangles on the page:
function displayRandomRect() {

    // Take HTML elements:
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    // Create random location, size and color:
    const xLocation = Math.floor(Math.random() * 600 - 50 + 1) + 50;
    const yLocation = Math.floor(Math.random() * 450 - 50 + 1) + 50;
    const rectWidth = Math.floor(Math.random() * 500 - 300 + 1) + 300;
    const rectHeight = Math.floor(Math.random() * 300 - 200 + 1) + 200;
    const randomColor = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];

    // Display the rectangle when the user press the "Random Rectangle" button:
    painter.fillStyle = randomColor[Math.floor(Math.random() * 7 - 0)];
    painter.fillRect(xLocation, yLocation, rectWidth, rectHeight);
}