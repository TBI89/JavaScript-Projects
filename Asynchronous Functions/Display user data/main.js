// Demo for a server that holds user data:
function getUserFromServer(callback) {
    setTimeout(() => {
        const user = { firstName: "Moishe", lastName: "Ufnik" };
        // Return user data:
        return callback(user);
    }, 4000);
}

// Display data on the console:
function displayUser(user) {
    console.log(`First Name: ${user.firstName}, LastName: ${user.lastName}`);
}

// Call the function that hold the data:
getUserFromServer(displayUser);