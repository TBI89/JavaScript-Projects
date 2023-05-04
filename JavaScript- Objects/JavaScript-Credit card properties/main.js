//  Credit card properties

const creditCard = {
    type: "Visa",
    number: "4580-1234-4567-7890",
    validity: "01-02-24",
    cvv: "123",
};

// Display without using for-in loop:

document.write(`Card type: ${creditCard.type}<br>`);
document.write(`Card number: ${creditCard.number}<br>`);
document.write(`Validity: ${creditCard.validity}<br>`);
document.write(`CVV (3 digits in the back of the card): ${creditCard.cvv}<br>`);

document.write("<hr>");

// Display with a for-in loop:

for (const prop in creditCard) {
    document.write(`${prop}➡️${creditCard[prop]}<br>`);
}