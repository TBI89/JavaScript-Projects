// If the user enters zero, or negative: print all the numbers between "num" to 1 (not the breaking one).

let num = 1;
let count;

while (num > 0) {

    num = +prompt("Enter a number: ");

    if(num <= 0) {
        break;
    }

    count = num - 1;
    document.write(num + " ");

    while (count >= 1) {
        document.write(count + " ");
        count--;
    }

    document.write("<br>");
}
