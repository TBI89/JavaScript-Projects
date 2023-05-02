// Display numbers- Small to big v2
// Print only numbers that divide by 7

let n1 = +prompt("Enter the first number: ");
let n2 = +prompt("Enter the second number: ");

for (let i = n1; i <= n2; i = i + 1) {

    if (i % 7 === 0 || i % 10 === 7) {
        document.write(i + " ")
    }
}