// Customer and Credit card

// First object:

const customer = {
    firstName: "David",
    lastName: "Levi",
    email: "david.levi@gmail.com",
    phone: "052-1234567"
};

// Second object:

const creditCard = {
    type: "Diners",
    number: "9876-6543-4321-1234",
    validity: "12-11-28",
    cvv: "987"
};

console.log(customer);
console.log(creditCard);

// Display all objects with out using for-in loop:

document.write(`First name: ${customer.firstName}<br>`);
document.write(`Last name: ${customer.lastName}<br>`);
document.write(`Email address: ${customer.email}<br>`);
document.write(`Phone number: ${customer.firstName}<br>`);

document.write("<hr>");

document.write(`Card type: ${creditCard.type}<br>`);
document.write(`Card number: ${creditCard.number}<br>`);
document.write(`Validity: ${creditCard.validity}<br>`);
document.write(`CVV: ${creditCard.cvv}<br>`);

document.write("<hr>");

// Display all objects with a for-in loop:

for(const prop in customer) {
    document.write(`${prop}➡️${customer[prop]}<br>`);
}

document.write("<hr>");

for(const prop in creditCard) {
    document.write(`${prop}➡️${creditCard[prop]}<br>`);
}