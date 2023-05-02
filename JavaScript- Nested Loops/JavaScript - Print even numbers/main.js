// If the user enters zero, or negative: print all the even 
// numbers between 2 to "num"  (not the breaking one).

let num = 2;
let count;

while (num > 0) {

    count = 2;
    num = +prompt("Enter a number: ");

    while (count <= num) {
        document.write(count + " ");
        count += 2;
    }

    document.write("<br>");
}
