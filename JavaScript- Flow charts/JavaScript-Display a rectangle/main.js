// Display a rectangle

let width = +prompt("Enter the rectangles width: ");
let height = +prompt("Enter the rectangles height: ");

for (let i = 1; i <= width; i = i + 1) {
    let row = "";

    for (let j = 1; j <= height; j = j + 1) {
        row = row + "* ";
    }
    document.write(row + "<br>");
}