// Change the background color of the page every second:
function generateBackgroundColor() {

    setInterval(() => {
        const colors = ["red", "green", "blue", "brown", "purple", "pink", "yellow"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        document.body.style.backgroundColor = randomColor;
    }, 1000);
}

generateBackgroundColor();