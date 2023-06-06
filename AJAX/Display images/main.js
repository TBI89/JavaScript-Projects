"use strict";

// Using IIFE in order to stay out of window scope:  
(() => {

    // When the user clicks the button, go to the given url:
    const imageButton = document.getElementById("imageButton");
    imageButton.addEventListener("click", async () => {
        const imageContainer = await getJSON("https://jsonplaceholder.typicode.com/photos");
        displayImages(imageContainer);
    });

    // Show user data via an HTML table:
    function displayImages(imageContainer) {

        const tableBody = document.getElementById("tableBody");
        let html = "";

        for (let i = 0; i < 100; i++) {
            const props = imageContainer[i];
            html += `
        <tr>
        <td>${props.albumId}</td>
        <td>${props.id}</td>
        <td>${props.title}</td>
        <td>
        <img class="pictures" src="${props.thumbnailUrl}"></img>
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