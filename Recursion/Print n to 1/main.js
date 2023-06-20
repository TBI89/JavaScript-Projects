"use strict";

(() => {

    // WHen the user clicks the button, all numbers between n to 1 will be displayed on the page:
    const displayNumbers = document.getElementById("displayNumbers");
    displayNumbers.addEventListener("click", () => {
        printNumbers(42);
    });
   
    // Recursive function to display the numbers:
    function printNumbers(n) {
        if(n <= 1) {
            return;
        }
        document.write(n + ", ");
        printNumbers(n - 1); 
    }

})();