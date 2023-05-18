
// Function that draws random circles and rectangles on the page:
function displayRandomShapes(count) {

    // Take HTML elements:
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    // Create random location, radius and color for the circle:
    const xCircleLocation = Math.floor(Math.random() * 600 - 50 + 1) + 50;
    const yCircleLocation = Math.floor(Math.random() * 450 - 50 + 1) + 50;
    const radius = Math.floor(Math.random() * 120 - 20 + 1) + 20;
    const randomCircleColor = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];

    // Display the circles on the canvas every time the user clicks the "Random Circle" button:
    painter.fillStyle = randomCircleColor[Math.floor(Math.random() * 7 - 0)];
    painter.beginPath();
    painter.arc(xCircleLocation, yCircleLocation, radius, 0, 2 * Math.PI);
    painter.fill();

    // Create random location, size and color for the rectangle:
    const xRectLocation = Math.floor(Math.random() * 600 - 50 + 1) + 50;
    const yRectLocation = Math.floor(Math.random() * 450 - 50 + 1) + 50;
    const rectWidth = Math.floor(Math.random() * 500 - 300 + 1) + 300;
    const rectHeight = Math.floor(Math.random() * 300 - 200 + 1) + 200;
    const randomRectColor = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];

    // Display the rectangle when the user press the "Random Rectangle" button:
    painter.fillStyle = randomRectColor[Math.floor(Math.random() * 7 - 0)];
    painter.fillRect(xRectLocation, yRectLocation, rectWidth, rectHeight);

    // Show 100 times:
    for(let i = 1; i <= 100; i++) {
        displayRandomShapes();
    }
}