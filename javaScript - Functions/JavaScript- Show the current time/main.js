"use strict";

// Function that shows the current time:

function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.write(timeString);
}

setInterval(showTime, 6000);