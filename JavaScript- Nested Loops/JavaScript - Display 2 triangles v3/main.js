// Display 2 triangles: 
// The first made of increasing numbers (from 1, by 2 etch time).
// The second one made of decreasing numbers (from 1, by 2 etch time).

let n = +prompt("Enter a positive number: ");

for (let i = 1; i <= n; i += 2) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

for (let i = n - 2; i >= 0; i -= 2) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}