"use strict";

// Using IIFE in order to stay out of window scope:  
(() => {

    // When loading the page, go to the given url:
    const goToSite = document.getElementById("goToSite");
    goToSite.addEventListener("load", async () => {
        const userContainer = await getJSON("https://jsonplaceholder.typicode.com/users");
        displayUsers(userContainer);
    });

    // Show user name in an HTML select box:
    function displayUsers(userContainer) {
        const userIdList = document.getElementById("userIdList");
        let html = "";

        for (const props of userContainer) {
            html += `
            <option value=${props.id}>${props.name}</option>`
        }
        userIdList.innerHTML = html;
    }

    // Get JSON from REST API:
    async function getJSON(url) {

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    // When the user clicks on any option, go to the given url:
    const userIdList = document.getElementById("userIdList");
    userIdList.addEventListener("change", async () => {

        const optionChoice = userIdList.options[userIdList.selectedIndex];
        const optionValue = optionChoice.value;
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${optionValue}`
        const userPropsContainer = await getPropsJSON(apiUrl);
        userIdList.value = apiUrl;
        displayUsersProps(userPropsContainer);
    });

    // Show user properties:
    function displayUsersProps(userPropsContainer) {
        
        const userPropsUl = document.getElementById("userPropsUl");
        let html = `
        
        <li>Name: ${userPropsContainer.name}</li>
        <li>User Name: ${userPropsContainer.username}</li>
        <li>Email: ${userPropsContainer.email}</li>
        <li>Phone: ${userPropsContainer.phone}</li>
        <li>City: ${userPropsContainer.address.city}</li>
        <li>Street: ${userPropsContainer.address.street}</li>
        <li>Zip Code: ${userPropsContainer.address.zipcode}</li>
        <li>Company Name: ${userPropsContainer.company.name}</li>`

        userPropsUl.innerHTML = html;
    }

    // Get JSON from REST API:
    async function getPropsJSON(propsUrl) {

        const response = await fetch(propsUrl);
        const data = await response.json();
        return data;
    }

})();