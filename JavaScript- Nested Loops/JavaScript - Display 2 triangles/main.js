// Display 2 triangles: 
// The first made of increasing numbers.
// The second one made of decreasing numbers.

let n = +prompt("Enter a positive number: ");

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

for (let i = n; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}