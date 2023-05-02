// Display a triangle v2

let n = +prompt("Enter a number: ");
let output = "";

for (let i = 1; i <= n; i = i + 1) {
    let row = "";

    for (let j = 1; j <= i; j = j + 1) {
        row += j;

        if(j !== i) {
            row += " ";
        }
    }
    
    output += row + "<br>";

}

document.write(output);