// Generate a random number (after a 5 sec delay) and display on the console:
function getRandomNumAfterDelay() {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 100);
        console.log(num);
    }, 5000);
}