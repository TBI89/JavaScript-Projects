//  Clothing item properties

const clothingItem = {
    manufacture: "Zara",
    size: "Small",
    color: "Green",
    price: 80
};

console.log(clothingItem);

// Display without for-in loop:

document.write(`Manufacture: ${clothingItem.manufacture}<br>`);
document.write(`Size: ${clothingItem.size}<br>`);
document.write(`Color: ${clothingItem.color}<br>`);
document.write(`Price: ${clothingItem.price}<br>`);

document.write("<hr>");

// Display with for-in loop:

for (const prop in clothingItem) {
    document.write(`${prop}➡️${clothingItem[prop]}<br>`);
}

document.write("<hr>");

// Change properties values:

clothingItem.manufacture = "Fox";
document.write(`Manufacture: ${clothingItem.manufacture}<br>`);

clothingItem.size = "Large";
document.write(`Size: ${clothingItem.size}<br>`);

clothingItem.color = "Blue";
document.write(`Color: ${clothingItem.color}<br>`);

clothingItem.price = 50;
document.write(`Price: ${clothingItem.price}<br>`);

document.write("<hr>");

for (const prop in clothingItem) {
    document.write(`${prop}➡️${clothingItem[prop]}<br>`);
}