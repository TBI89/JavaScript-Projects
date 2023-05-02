// Display a rectangle made of "*" (based on the users input).

let width = +prompt("Enter the rectangles width: ");
let height = +prompt("Enter the rectangles height: ");


for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= width; j++) {
        document.write(row + "* ");
    }

    document.write(row + "<br>");
}