// Generate random number etch second:
setInterval(generateRandomN, 1000);
function generateRandomN() {
    let randomN = Math.floor(Math.random() * 500);
    document.write(randomN + ", ");
}