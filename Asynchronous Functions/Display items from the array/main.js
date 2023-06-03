// Demo for a server that holds grades (array of numbers):
function getGradesFromServer(callback) {
    setTimeout(() => {
        const grades = [100, 98, 75, 80, 100, 87];
        // Return data:
        return callback(grades);
    }, 7000);
}

// Display the grades on the console:
function displayGrades(grades) {
    console.log(grades);
}

// Call the function that hold the grades:
getGradesFromServer(displayGrades);