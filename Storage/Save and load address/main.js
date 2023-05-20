
loadFromLocalStorage();

// Save user input to local storage using a function:
function saveToLocalStorage() {

    // Take HTML elements:
    const cityBox = document.getElementById("cityBox");
    const streetBox = document.getElementById("streetBox");
    const houseNumBox = document.getElementById("houseNumBox");
    const postalCodeBox = document.getElementById("postalCodeBox");

    // Take values:
    const city = cityBox.value;
    const street = streetBox.value;
    const houseNum = houseNumBox.value;
    const postalCode = postalCodeBox.value;

    // Create an object from all values:
    const address = { city, street, houseNum, postalCode };

    // Convert to JSON:
    const json = JSON.stringify(address);
    localStorage.setItem("address", json);
}

// Load and display user input from local storage using a function:
function loadFromLocalStorage() {
    const json = localStorage.getItem("address");
    const address = JSON.parse(json);

    const cityBox = document.getElementById("cityBox");
    const streetBox = document.getElementById("streetBox");
    const houseNumBox = document.getElementById("houseNumBox");
    const postalCodeBox = document.getElementById("postalCodeBox");

    cityBox.value = address.city;
    streetBox.value = address.street;
    houseNumBox.value = address.houseNum;
    postalCodeBox.value = address.postalCode;
}