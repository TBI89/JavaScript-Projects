"use strict";

(() => {

    // When the user clicks the button, display the product multiplication of all numbers on the page:
    const displayProductMul = document.getElementById("displayProductMul");
    displayProductMul.addEventListener("click", () => {
        let productMul = calcProductMul(5); // 5 * 4 * 3 * 2 * 1 = 120
        document.write(productMul);
    });

    // Recursive function to display the numbers:
    function calcProductMul(n) {
        if (n <= 1) {
            return 1;
        }
        return n * calcProductMul(n - 1);
    }

})();