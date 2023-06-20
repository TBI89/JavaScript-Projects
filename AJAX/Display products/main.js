"use strict";

// IIFE
(() => {

    // Onload, go to url:
    const goToUrl = document.getElementById("goToUrl");
    goToUrl.addEventListener("load", async () => {

        try {
            const productContainerForSelect = await getJsonForSelect("https://fakestoreapi.com/products");
            displayProductsForSelect(productContainerForSelect);
        }
        catch (err) {
            alert("Error fetching data:" + err);
        }

    });

    // Display all the products (titles) in the options:
    function displayProductsForSelect(productContainerForSelect) {

        const selectBox = document.getElementById("selectBox");
        let html = "";
        for (const product of productContainerForSelect) {
            html +=
                `
         <option value="${product.id}">${product.title}</option>
         `
        }
        selectBox.innerHTML = html;
    }

    // Get JSON from REST API (for the select box):
    async function getJsonForSelect(url) {

        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    // When the user chooses an option, go to the given url: 
    const selectBox = document.getElementById("selectBox");
    selectBox.addEventListener("change", async () => {

        try {
            const usersChoice = selectBox.options[selectBox.selectedIndex];
            const optionVal = usersChoice.value;
            const productContainerForList = await getJsonForList(`https://fakestoreapi.com/products/${optionVal}`);
            displayProductsForList(productContainerForList);
        }
        catch (err) {
            alert("Error fetching data:" + err);
        }

    });

    // Display some of the product properties on built point list:
    function displayProductsForList(productContainerForList) {

        const singleProductUl = document.getElementById("singleProductUl");
        let html =
            `
        <li lass="list-group-item">Title: ${productContainerForList.title}</li>
        <li class="list-group-item list-group-item-primary">ID: ${productContainerForList.id}</li>
        <li class="list-group-item list-group-item-success">Price: ${productContainerForList.price}</li>
        <li class="list-group-item list-group-item-info">Category: ${productContainerForList.category}</li>
        <li class="list-group-item list-group-item-light">Rating: ${productContainerForList.rating.rate}</li>
        `
        singleProductUl.innerHTML = html;
    }

    // Get JSON from REST API (for the built point list):
    async function getJsonForList(url) {

        const response = fetch(url);
        const data = (await response).json();
        return data;
    }

    // When the user clicks the button, go the url:
    const tableButton = document.getElementById("tableButton");
    tableButton.addEventListener("click", async () => {

        try {
            const productContainerForTable = await getJsonForTable("https://fakestoreapi.com/products");
            displayProductsForTable(productContainerForTable);
        }
        catch(err) {
            alert("Error fetching data: " + err);
        }
       
    });

    // Display all products (and must of the props) on a table:
    function displayProductsForTable(productContainerForTable) {

        const multiProductTable = document.getElementById("multiProductTable");
        let html = "";
        for (const products of productContainerForTable) {
            html +=
                `
            <tr>
            <td>${products.id}</td>
            <td>${products.title}</td>
            <td>${products.price}</td>
            <td>${products.category}</td>
            <td>
            <img class="rounded-circle" id="table-image" src="${products.image}"></img>
            </td>
            <td>${products.rating.rate}</td>
            </tr>
            `
        }
        multiProductTable.innerHTML = html;
    }

    // Get JSON from REST API (for the table):
    async function getJsonForTable(url) {

        const response = fetch(url);
        const data = (await response).json();
        return data;
    }

})();