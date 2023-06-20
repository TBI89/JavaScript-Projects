"use strict";

(() => {

    // WHen the user clicks the button, display numbers between 1 to n (increasing order):
    const displayNumbers = document.getElementById("displayNumbers");
    displayNumbers.addEventListener("click", () => {
        printNumbers(100);
    });

    // Recursive function to display the numbers:
    function printNumbers(n) {
        if(n < 1) {
            printStartToEnd(1, n);   
        }
        printStartToEnd(n, 1);
    }

    function printStartToEnd(end, current) {
        if (current > end) return;
        document.write(current + ", ");
        printStartToEnd(end, current + 1);
    }

})();