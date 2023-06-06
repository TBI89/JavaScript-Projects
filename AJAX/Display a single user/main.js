"use strict";

// Staying out of the window scope (IIFE):
(() => {

    // Take HTML elements:
    const goToSiteButton = document.getElementById("goToSiteButton");
    const userIdBox = document.getElementById("userIdBox");

    // On click, go to the given url:
    goToSiteButton.addEventListener("click", async () => {

        const userId = userIdBox.value;
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
        const dataContainer = await getJSON(apiUrl);
        userIdBox.value = apiUrl;
        displayUserData(dataContainer);
    });

    // Display user data + the new id in built point list:
    function displayUserData(dataContainer) {

        const userDataUl = document.getElementById("userDataUl");
        let html = `

        <li>Id: ${dataContainer.id}</li>
        <li>Name: ${dataContainer.name}</li>
        <li>User Name: ${dataContainer.username}</li>
        <li>Email: ${dataContainer.email}</li>
        <li>Phone: ${dataContainer.phone}</li>
        <li>City: ${dataContainer.address.city}</li>
        <li>Street: ${dataContainer.address.street}</li>
        <li>Zip Code: ${dataContainer.address.zipcode}</li>
        <li>Company Name: ${dataContainer.company.name}</li>
   `
        userDataUl.innerHTML = html;
    }

    // Get JSON from REST API:
    async function getJSON(url) {

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
})();