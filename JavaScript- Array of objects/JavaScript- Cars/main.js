// 3 objects inside of an array

const cars = [

    {
        model: "Hyundai Ioniq",
        yearOfManufacture: 2018,
        color: "Gray"
    },

    {
        model: "Geely Geometric C",
        yearOfManufacture: 2022,
        color: "White"
    },

    {
        model: "Tesla model 3",
        yearOfManufacture: 2021,
        color: "Red"
    }

];

console.log(cars);

// Display every object property's separately, then run again in a "for-in" loop

for (const item of cars) {
    for (const prop in item) {
        document.write(`${prop} --> ${item[prop]}<br>`);
    }
    document.write("<hr>");
}