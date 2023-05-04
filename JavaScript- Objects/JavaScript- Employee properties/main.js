//  Employee properties

const employee = {
    firstName: "Yossi",
    lastName: "Cohen",
    salary: 20000,
    email: "yossi.cohen@gmail.com"
};

console.log(employee);

// Display without using for-in loop:

document.write(`First name: ${employee.firstName}<br>`);
document.write(`Last name: ${employee.lastName}<br>`);
document.write(`Salary in ILS: ${employee.salary}<br>`);
document.write(`Email address: ${employee.email}<br>`);

document.write("<hr>");

// Display with a for-in loop:

for (const prop in employee) {
    document.write(`${prop}➡️ ${employee[prop]}<br>`);
}