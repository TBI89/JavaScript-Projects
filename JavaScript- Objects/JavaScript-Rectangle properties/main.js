//  Display rectangle properties

const rectangle = {
    width: "20",
    height: "15",
    color: "red",
    x: "12",
    y: "10"
};

console.log(rectangle);

// Without using a for-in loop

document.write(`Rectangle's width is: ${rectangle.width}<br>`);
document.write(`Rectangle's height is: ${rectangle.height}<br>`);
document.write(`Rectangle's color is: ${rectangle.color}<br>`);
document.write(`Rectangle's Location on the X axis is: ${rectangle.x}<br>`);
document.write(`Rectangle's Location on the y axis is: ${rectangle.y}<br>`);

document.write("<hr>");

// With a for-in loop

for (const prop in rectangle) {
    document.write(`${prop}➡️ ${rectangle[prop]}<br>`);
}