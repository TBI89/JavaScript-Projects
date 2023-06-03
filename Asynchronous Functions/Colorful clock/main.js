// Display a clock:
function displayClock() {
    const clockSpan = document.getElementById("clockSpan");

    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockSpan.innerHTML = timeString;
        changeClockColor();
    }, 1000);
}

//Change the font color etch second:
function changeClockColor() {
    const clockSpan = document.getElementById("clockSpan");

    const colors = ["red", "green", "blue", "purple", "pink", "yellow", "gray"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    clockSpan.style.color = randomColor;
}