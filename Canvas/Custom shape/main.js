
// Function that draws a customized circle (based on user input):
function createCircle() {

    // Take HTML elements:
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");
    const xBox = document.getElementById("xBox");
    const yBox = document.getElementById("yBox");
    const radiusBox = document.getElementById("radiusBox");
    const colorBox = document.getElementById("colorBox");

    // Take values:
    const x = +xBox.value;
    const y = +yBox.value;
    const radius = +radiusBox.value;
    const color = colorBox.value;

    // Validate the values
    if (xBox.value === "") {
        alert("Please enter a number");
        xBox.style.backgroundColor = "red";
        return;
    }
    if (yBox.value === "") {
        alert("Please enter a number");
        yBox.style.backgroundColor = "red";
        return;
    }
    if (radiusBox.value === "") {
        alert("Please enter a number");
        radiusBox.style.backgroundColor = "red";
        return;
    }

    // Display the circle on the canvas:
    painter.fillStyle = color;
    painter.beginPath();
    painter.arc(x, y, radius, 0, 2 * Math.PI);
    painter.fill();
}

