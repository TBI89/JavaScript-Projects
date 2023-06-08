"use strict";

// Using IIFE in order to stay out of window scope:  
(() => {
    // When loading the page, go to the given url:
    const goToSite = document.getElementById("goToSite");
    goToSite.addEventListener("load", async () => {
        const userContainer = await getJSON("https://reqres.in/api/users");
        displayUsers(userContainer);
    });

    // Show user data via an HTML table:
    function displayUsers(userContainer) {
        const tableBody = document.getElementById("tableBody");
        let html = "";

        for (const props of userContainer.data) {
            html += `
            <tr>
            <td>${props.first_name}</td>
            <td>${props.last_name}</td>
            <td>${props.email}</td>
            <td>
            <img class="avatars" src="${props.avatar}"></img>
            </td>
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