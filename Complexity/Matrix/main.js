"use strict";

(() => {

    // Creating a 10 by 10 matrix with random values (numbers form 0 to 100):
    const mat = [];

    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            const randomNum = Math.floor(Math.random() * 100);
            row.push(randomNum);
        }
        mat.push(row);
    }
    console.log(mat); // Check the matrix.

    // When the user clicks a button, the average of all values will be displayed:
    const displayMatrixAverage = document.getElementById("displayMatrixAverage");
    displayMatrixAverage.addEventListener("click", () => {
        const avg = getAverage(mat);
        document.write("The average value of the matrix is:" + avg);
    });

    // Calculating the average value from the whole matrix:
    function getAverage(mat) { // Function complexity is: O(n^2)
      let sum = 0;
      let count = 0;
      for(const arr of mat) {
        for(const num of arr) {
            sum += num;
            count++;
        }
      }
      const avg = sum / count;
      return avg;
    }

})();

