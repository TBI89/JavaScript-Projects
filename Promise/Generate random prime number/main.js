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
                // If the number if a prime number (can be divided only by one or itself) declare success:
                if (checkPrime(randomNum)) {
                    resolve(randomNum);
                }
                else {
                    throw new Error("The number isn't a prime number");
                }
            }
            // Else: trow an error:
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
}

// Check if the number is a prime number:
function checkPrime(randomNum) {
    if (randomNum <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(randomNum); i++) {
        if (randomNum % i === 0) {
            return false;
        }
    }
    return true;
}