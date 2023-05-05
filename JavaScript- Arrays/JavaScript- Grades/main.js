// Grades

// Array with 10 items (grade values):

const grades = [84, 65, -4, 98, 100, 69, 89, 98, 112, 67];
const illegalGrades = [];

// Check if all the grades are legal:

for (const item of grades) {

    if (item > 100 || item < 0) {
        illegalGrades.push(item);
    }
}

// Alert + display the illegal grades (if any):

if (illegalGrades.length > 0) {
    alert("The following grades are illegal!");
    document.write(illegalGrades + "<br>");
}
else {
    alert("All the grades are legal!🙂");
}