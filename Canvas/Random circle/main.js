// Function that display a random circles on the page:
function showCircle() {

    // Get HTML element:
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    // Create random location, radius and color for the circle:
    const xLocation = Math.floor(Math.random() * 600 - 50 + 1) + 50;
    const yLocation = Math.floor(Math.random() * 450 - 50 + 1) + 50;
    const radius = Math.floor(Math.random() * 120 - 20 + 1) + 20;
    const randomColor = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];

    // Display the circles on the canvas every time the user clicks the "Random Circle" button:
    painter.fillStyle = randomColor[Math.floor(Math.random() * 7 - 0)];
    painter.beginPath();
    painter.arc(xLocation, yLocation, radius, 0, 2 * Math.PI);
    painter.fill();
}




