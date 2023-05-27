// Generate random color etch second:
setInterval(generateRandomColor, 1000);

function generateRandomColor() {
    const colors = ["red", "green", "blue", "gray", "yellow", "black", "orange", "aqua", "cyan"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
}