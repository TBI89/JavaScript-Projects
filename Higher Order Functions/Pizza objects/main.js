"use strict";

// Empty array:
const food = [];

// Push 20 random objects (pizza: diameter, slices, toppings, price) to the array:
for (let i = 1; i <= 20; i++) {
    const pizza = {
        diameter: Math.floor(Math.random() * (40 - 10 + 1)) + 10,
        slices: Math.floor(Math.random() * (8 - 4 + 1)) + 4,
        toppings: Math.floor(Math.random() * (4 - 0)),
        price: Math.floor(Math.random() * (90 - 20 + 1)) + 20
    };

    // Add vat to the prices (new object):
    const vat = pizza.price * 0.17
    const newPrice = pizza.price + vat;

    pizza.originalPrice = {
        vat: vat.toFixed(2),
        newPrice: newPrice.toFixed(2)
    };

    food.push(pizza);
}

// Display the array:
document.write("Menu:<br>");
for (const item of food) {
    document.write(`Diameter: ${item.diameter}, Slices: ${item.slices}, 
    Toppings: ${item.toppings}, Price: ${item.price}\u20AA,
     Vat: ${item.originalPrice.vat}\u20AA, New Price: ${item.originalPrice.newPrice}\u20AA <br>`); //Display the new object
}
document.write("<hr>");

// Display the first pizza (object) with no toppings:
const firstPizza = food.find(pizza => pizza.toppings === 0);
document.write(`The first pizza without toppings:<br> Diameter: ${firstPizza.diameter}, Slices: ${firstPizza.slices}, 
Toppings: ${firstPizza.toppings}, Price: ${firstPizza.price}\u20AA <hr>`);

// Display the first pizza that's chipper then 30₪:
const chipperThen30 = food.find(pizza => pizza.price < 30);
document.write(`The first pizza that's chipper then 30\u20AA:<br> Diameter: ${chipperThen30.diameter}, Slices: ${chipperThen30.slices}, 
Toppings: ${chipperThen30.toppings}, Price: ${chipperThen30.price}\u20AA <hr>`);

// Display all pizzas with a diameter smaller or equal to 20:
document.write("Diameter sub/equal to 20:<br>");
const diameterLessThen20 = food.filter(pizza => pizza.diameter <= 20);
diameterLessThen20.forEach(pizza => {
    document.write(`Diameter: ${pizza.diameter}, Slices: ${pizza.slices}, 
Toppings: ${pizza.toppings}, Price: ${pizza.price}\u20AA<br>`);
});
document.write("<hr>");

// Display all pizzas that cost more then 80₪:
document.write("Cost more then 80\u20AA:<br>");
const costMoreThen80 = food.filter(pizza => pizza.price > 80);
costMoreThen80.forEach(pizza => {
    document.write(`Diameter: ${pizza.diameter}, Slices: ${pizza.slices}, 
Toppings: ${pizza.toppings}, Price: ${pizza.price}\u20AA<br>`);
});
document.write("<hr>");

// Display all pizzas with no toppings:
document.write("Pizza with no toppings:<br>");
const zeroToppings = food.filter(pizza => pizza.toppings === 0);
zeroToppings.forEach(pizza => {
    document.write(`Diameter ${pizza.diameter}, Slices: ${pizza.slices}, 
Toppings: ${pizza.toppings}, Price: ${pizza.price}\u20AA<br>`);
});
document.write("<hr>");

// Show the index of the first pizza with 6 slices:
const firstSixSlices = food.findIndex(pizza => pizza.slices === 6);
document.write("Index of the first pizza with 6 slices:" + firstSixSlices + "<hr>");

// Show the radius of all pizzas:
document.write("Radius of all pizzas:<br>");
const radiusAllPizzas = food.filter(pizza => pizza.diameter = pizza.diameter / 2);
radiusAllPizzas.forEach(pizza => {
    document.write(`Radius: ${pizza.diameter}, Slices: ${pizza.slices}, 
    Toppings: ${pizza.toppings}, Price: ${pizza.price}\u20AA<br>`);
});
document.write("<hr>");

// The total price of all the pizzas:
let totalPrice = 0;
for(const item of food) {
    totalPrice += item.price;
}
document.write("Total price for all pizzas:" + totalPrice + "\u20AA<hr>");

// Show the most expensive price:
const maxPrice = food.reduce((largest, current) => {
    return current.price > largest.price ? current : largest;
});
document.write(`The highest price on the menu is: ${maxPrice.price}\u20AA<hr>`);

// Show the most expensive pizza (the whole object):
const maxPizza = food.reduce((largest, current) => {
    return current.price > largest.price ? current : largest;
});
document.write(`The pizza that cost the most is: Diameter ${maxPizza.diameter}, Slices: ${maxPizza.slices}, 
Toppings: ${maxPizza.toppings}, Price: ${maxPizza.price}\u20AA`);