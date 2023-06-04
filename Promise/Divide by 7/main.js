// Show the number / error message on the page:
function displayNum() {
    const myPromise = generate7BoomAfterDelayAsync();
    myPromise
        .then(randomNum => document.write(randomNum))
        .catch(err => alert(err.message));
}

// Get 2 numbers from the user ("min", "max"):
function generate7BoomAfterDelayAsync(min, max) {
    // Take HTML elements:
    const minNumBox = document.getElementById("minNumBox");
    const maxNumBox = document.getElementById("maxNumBox");

    // Take values:
    min = +minNumBox.value;
    max = +maxNumBox.value;

    // Return a random number / Trow an error:
    return new Promise((resolve, reject) => {
        // 1 second delay:
        setTimeout(() => {
            try {
                const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                // If the number divides by 7 or ends with it: declare success:
                if (randomNum % 7 === 0 || randomNum % 10 === 7) {
                    resolve(randomNum);
                }
                else {
                    throw new Error("The number doesn't divide of end with a 7");
                }
            }
            // Else: trow an error:
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
}