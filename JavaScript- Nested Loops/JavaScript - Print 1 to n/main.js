// If the user enters zero, or negative: print all the numbers between 1 to "num"  (not the breaking one).

let num = 1;
let count;

while (num > 0) {

    count = 1;
    num = +prompt("Enter a number: ");

    while (count <= num) {
        document.write(count + " ");
        count++;
    }

    document.write("<br>");
}
