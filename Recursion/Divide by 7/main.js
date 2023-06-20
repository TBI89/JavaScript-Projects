"use strict";

(() => {

    // WHen the user clicks the button, print all numbers that divide / end with 7:
    const displayNumbersThatDivideOrEndWith7 = document.getElementById("displayNumbersThatDivideOrEndWith7");
    displayNumbersThatDivideOrEndWith7.addEventListener("click", () => {
        printNumbers(1000);
    });
   
    // Recursive function to display the  numbers in a descending order:
    function printNumbers(n) {
        if(n <= 1) {
            return;
        }
        if(n % 7 === 0 && n % 10 === 7) {
            document.write(n + ", ");
        }
        printNumbers(n - 1); 
    }

})();