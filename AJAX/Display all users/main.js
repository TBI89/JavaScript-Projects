"use strict";

// Using IIFE in order to stay out of window scope:  
(() => {
    // When loading the page, go to the given url:
    const goToSite = document.getElementById("goToSite");
    goToSite.addEventListener("load", async () => {
        const userContainer = await getJSON("https://jsonplaceholder.typicode.com/users");
        displayUsers(userContainer);
    })

    // Show user data via an HTML table:
    function displayUsers(userContainer) {
        const tableBody = document.getElementById("tableBody");
        let html = "";

        for (const props of userContainer) {
            html += `
        <tr>
        
        <td>${props.name}</td>
        <td>${props.username}</td>
        <td>${props.email}</td>
        <td>${props.phone}</td>
        <td>${props.address.street}</td>
        <td>${props.address.city}</td>
        <td>${props.company.name}</td>
        <td>${props.address.zipcode}</td>
        
        </tr>`
        }
        tableBody.innerHTML = html;
    }

    // Get JSON from REST API:
    async function getJSON(url) {

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

})();