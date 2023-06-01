// Print on the page: start > end > first number > second number > third number:
function generateRandomNum() {

    document.write("Start<br>");//1

    setTimeout(() => {
        const n = Math.floor(Math.random() * 100); //3
        document.write(n);
    }, 3000);
    setTimeout(() => {
        const n = Math.floor(Math.random() * 100); //4
        document.write(", " + n);
    }, 5000);
    setTimeout(() => {
        const n = Math.floor(Math.random() * 100); //5
        document.write(", " + n);
    }, 7000);

    document.write("End<br>"); //2
}