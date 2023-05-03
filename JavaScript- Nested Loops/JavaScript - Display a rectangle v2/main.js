// Display a rectangle made of "*" (based on the users input).

let width = +prompt("Enter the rectangles width: ");
let height = +prompt("Enter the rectangles height: ");


for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
        const text = (i === 1 || i === height || j === 1 || j === width) ? "* " : "&nbsp;&nbsp;";
        document.write(text);
    }
    document.write("<br>");
}