"use strict";

// Generate and display 100 random numbers every 3 seconds:
setInterval(() => {
    for (let i = 1; i <= 100; i++) {
        Math.floor(Math.random() * 50);
        document.write(i + "| ");
    }
}, 1000);