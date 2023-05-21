// Call the function in order to display animal data in a HTML table:
loadFromStorage();

// Function that saves the users input to local storage:
function saveToStorage() {

    // Take HTML elements:
    const typeBox = document.getElementById("typeBox");
    const nameBox = document.getElementById("nameBox");
    const ageBox = document.getElementById("ageBox");
    const imageBox = document.getElementById("imageBox");

    // Take there values:
    const animalType = typeBox.value;
    const animalName = nameBox.value;
    const animalAge = ageBox.value;
    const animalImage = imageBox.value;

    // Validate all inputs:
    if (typeBox.value === "") {
        alert("Please enter the animal type");
        typeBox.focus();
        return;
    }
    if (nameBox.value === "") {
        alert("Please enter the animal name");
        typeBox.focus();
        return;
    }
    if (ageBox.value === "" || ageBox.value < 0) {
        alert("Please enter a legal age");
        typeBox.focus();
        return;
    }
    if (imageBox.value === "") {
        alert("Please enter a link for the animal photo");
        typeBox.focus();
        return;
    }

    // Create an object from all values (for etch user):
    const animalData = { animalType, animalName, animalAge, animalImage };

    // Get existing array from storage (values from all users):
    let json = localStorage.getItem("fullAnimalData");
    let fullAnimalData = json ? JSON.parse(json) : [];

    // Add new object:
    fullAnimalData.push(animalData);

    // Save to local storage:
    json = JSON.stringify(fullAnimalData);
    localStorage.setItem("fullAnimalData", json);
}

// Function that gets the user data from the local storage:
function loadFromStorage() {
    // Get HTML element (div):
    const animalTable = document.getElementById("animalTable");

    // Read animal data from storage:
    let json = localStorage.getItem("fullAnimalData");
    let fullAnimalData = JSON.parse(json);

    // Check for animal data (if none, don't display anything):
    if (!fullAnimalData) {
        return;
    }

    // Display all the data on an HTML table (only when the user refreshes the page):
    let htmlTable = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Animal Type</th>
          <th scope="col">Animal Name</th>
          <th scope="col">Animal Age</th>
          <th scope="col">Animal Image</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  for (const item of fullAnimalData) {
    htmlTable += `
      <tr>
        <th scope="row">${item.animalType}</th>
        <td>${item.animalName}</td>
        <td>${item.animalAge}</td>
        <td>
          <a>
            <img src="${item.animalImage}" alt="Animal Image" style="max-width: 100px;">
          </a>
        </td>
      </tr>
    `;
  }
  
  htmlTable += `
      </tbody>
    </table>
  `;
  
    animalTable.innerHTML = htmlTable;
}