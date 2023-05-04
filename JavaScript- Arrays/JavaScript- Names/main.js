// Names

// Collect names from the user:

const names = [
    prompt("Enter the first name:"),
    prompt("Enter the second name:"),
    prompt("Enter the third name:"),
    prompt("Enter the fourth name:"),
    prompt("Enter the fifth name:"),
];

// Print the first & the last name entered by the user:

document.write(`First name is: ${names[0]},`);
document.write(`Last name is: ${names[4]},`);

document.write("<hr>");

// Print in separate rows: 

document.write(`First name is: ${names[0]}<br>`);
document.write(`Last name is: ${names[4]}<br>`);

document.write("<hr>");

// Print all names in the same row in a decreasing order:

document.write(`Fifth name is: ${names[4]},`);
document.write(`Fourth name is: ${names[3]},`);
document.write(`Third name is: ${names[2]},`);
document.write(`Second name is: ${names[1]},`);
document.write(`First name is: ${names[0]},`);