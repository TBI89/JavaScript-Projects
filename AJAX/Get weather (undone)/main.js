"use strict";

// Using IIFE in order to stay out of window scope:  
(() => {

    // When the user clicks on any option, go to the given url:
    const whetherButton = document.getElementById("whetherButton");
    const telAvivOption = document.getElementById("telAvivOption");
    const tlv = telAvivOption.value; // * Checking that it works in a specific location
    console.log(tlv);
    whetherButton.addEventListener("click", async () => {

        const apiKey = "afb12b86a3f9e517bdc08c7bb3c795f0"
        const apiUrl = `https://openweathermap.org/data/2.5/weather?id=${tlv}&appid=439d4b804bc8187953eb36d2a8c26a02`
        const whetherContainer = await getPropsJSON(apiUrl);
        whetherButton.value = apiUrl;
        displayWhether(whetherContainer);
    });

    // Show user properties:
    function displayWhether(whetherContainer) {

        // * add the rest of the locations
        const divWhetherBox = document.getElementById("divWhetherBox");
        let html = `

        <span> City: ${whetherContainer.name}<br></span>
        <span> Temp: ${whetherContainer.main.temp}<br></span>
        `
        divWhetherBox.innerHTML = html;
    }

    // Get JSON from REST API:
    async function getPropsJSON(apiUrl) {

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }

})();