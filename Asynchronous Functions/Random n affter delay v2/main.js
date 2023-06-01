// Generate a random number (after a 5 sec delay) and display on the console:
function getRandomNumAfterDelay(callback, limit) {
    setTimeout(() => {
        const num = Math.floor(Math.random() * limit);
        callback(num);   
    }, 5000);
}

function displayNum(num) {
    console.log(num);
}

function generateNum() {
    getRandomNumAfterDelay(displayNum, 100);
}