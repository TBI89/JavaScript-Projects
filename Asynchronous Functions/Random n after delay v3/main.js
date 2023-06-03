// Generate a random number, after a 5 sec delay, and display a number from "first" to "last" (arguments):
function getRandomNumAfterDelay(callback, first, last) {
    setTimeout(() => {
        const num = Math.floor(Math.random() * last - first) - first;
        callback(num);   
    }, 5000);
}

function displayNum(num) {
    console.log(num);
}

function generateNum() {
    getRandomNumAfterDelay(displayNum, 100, 500);
}