// Collect the size of the array & the items from the user (via "onClick, HTML event"):
let sizeArr = [];
function calcAverage() {
    
    // If the user sends an empty string, NaN or undefined he will get alerted via the catch block:
    try {
        let size = +prompt("Enter a positive number");
        if (isNaN(size) || size <= 0 || size === "") {
            throw new Error("Please Enter a positive number");
        }

        for (let i = 0; i < size; i++) {
            let num = +prompt("Enter the numbers one at a time");
            if (isNaN(num) || num <= 0 || num === "") {
                throw new Error("Please Enter a positive number");
            }
            sizeArr.push(num);
        }
        let average = getAverage(sizeArr);
        document.write("Average:", average.toFixed(2));
    }
    catch (err) {
        alert(`Error message: ${err.message}`);
    }
}

// Function that gets an argument (array of numbers) and calculates their average:
function getAverage(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    let avg = sum / arr.length;
    return avg;
}

// Print the average of the array:
let arrAvg = getAverage(sizeArr);
document.write("Average: " + arrAvg);