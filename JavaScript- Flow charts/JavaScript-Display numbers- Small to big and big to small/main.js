// Display numbers- Small to big v2 (and big to small)

let n1 = +prompt("Enter the first number: ");
let n2 = +prompt("Enter the second number: ");
let start;
let end;

if (n1 < n2) {
    start = n1;
    end = n2;
}
else {
    start = n2;
    end = n1;
}

for (let i = start; i <= end; i++) {
    document.write(i + " ");
}

for (let i = end; i >= start; i--) {
    document.write(i + " ");
}