"use strict";

(() => {

    // Creating & adding the objects (clients) to a new map:
    const customers = new Map();

    customers.set(288465947, { firstName: "Daniel", lastName: "Levi", id: 288465947 });
    customers.set(3995884737, { firstName: "Meni", lastName: "Mamtera", id: 3995884737 });
    customers.set(288475847, { firstName: "Michal", lastName: "Haktana", id: 288475847 });
    customers.set(38834658, { firstName: "Yuval", lastName: "Hamebulbal", id: 38834658 });
    customers.set(388594739, { firstName: "Omer", lastName: "David", id: 388594739 });

    // Displaying all the client id's: 
    for (const [id] of customers) {
        document.write(`ID: ${id}<br>`);
    }
    document.write("<hr>");

    // Display the whole object for all clients:
    for (const [id, data] of customers) {
        document.write(`ID: ${id}, First name: ${data.firstName}, Last Name: ${data.lastName}<br>`);
    }
    document.write("<hr>");

    // Collect ID from one of the users.
    // If it exist - display the client, else - trow an error:
    const checkIfClientExist = +prompt("Enter your ID number");
    if(customers.has(checkIfClientExist)) {
        const client = customers.get(checkIfClientExist);
        document.write(`ID: ${client.id}, First name: ${client.firstName}, Last Name: ${client.lastName}<br>`);
    }
    else{
        alert(`ID Number: ${checkIfClientExist} doesn't exist`);
    }
    // The complexity of the search is O(1)

})();