// If the user enters zero, or negative: print all the even 
// numbers between "num" to 2 (not the breaking one).

let num;

while (true) {

    num = +prompt("Enter a number: ");
    if (num <= 0) {
        break;
    }

    if (num % 2 !== 0) {
        --num;
    }

    while (num >= 2) {
        document.write(num + " ");
        num -= 2;
    }

    document.write("<br>");
}