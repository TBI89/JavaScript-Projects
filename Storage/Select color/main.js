// Call the function to display the chosen color as a page background color:
loadChosenColor();

// Function that changes the page background color based on the users choice:
function changeBackgroundColor() {

    // Take HTML element & value
    const colorBox = document.getElementById("colorBox");
    const backgroundColor = colorBox.value;

    // Display the chosen color:
    document.body.style.backgroundColor = backgroundColor;

    // Save to local storage:
    localStorage.setItem("backgroundColor", backgroundColor);
}

// Load from local storage the last color chosen by the user:
function loadChosenColor() {
    let backgroundColor = localStorage.getItem("backgroundColor");
    document.body.style.backgroundColor = backgroundColor;
}