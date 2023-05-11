let password = prompt("Please enter a password:");

// Define regular expressions to match the password requirements:
const regexLength = /.{6,}/; 
const regexUppercase = /[A-Z]/; 
const regexLowercase = /[a-z]/; 
const regexNumber = /\d/; 
const regexOther = /[^A-Za-z0-9]/; 

// Check if the password meets all the requirements:
let errors = [];
if (!regexLength.test(password)) {
  errors.push("Password is too short.");
}
if (!regexUppercase.test(password)) {
  errors.push("Password must contain at least one uppercase letter.");
}
if (!regexLowercase.test(password)) {
  errors.push("Password must contain at least one lowercase letter.");
}
if (!regexNumber.test(password)) {
  errors.push("Password must contain at least one number.");
}
if (!regexOther.test(password)) {
  errors.push("Password must contain at least one non-alphanumeric character.");
}

// Display the appropriate message based on the password strength
if (errors.length === 0) {
  alert("Password is strong!🙂");
} else {
  let errorMessage = "Password is not strong😒. Reasons:";
  for (let i = 0; i < errors.length; i++) {
    errorMessage += "\n- " + errors[i];
  }
  alert(errorMessage);
}
