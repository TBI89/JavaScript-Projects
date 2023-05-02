// Print 1 to n and n to 1

let num;
let count = 1;

num = +prompt("Enter a number");

while (count <= num) {
    document.write(count + "");
    count = count + 1;
}

while (num >= 1) {
    document.write(num + "");
    num = num - 1;
}