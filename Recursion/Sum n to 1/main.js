"use strict";

(() => {

    // When the user clicks the button, display the sum of all numbers on the page:
    const displaySum = document.getElementById("displaySum");
    displaySum.addEventListener("click", () => {
        let sum = calcSum(5); // 5 + 4 + 3 + 2 + 1 = 15
        document.write(sum);
    });

    // Recursive function to display the numbers:
    function calcSum(n) {
        if (n <= 1) {
            return 1;
        }
        return n + calcSum(n - 1);
    }

})();