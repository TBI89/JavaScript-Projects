"use strict";

// Collect a web address from the user:

let webAddress = prompt("Type the website's address");
let webExtension = webAddress.substring(webAddress.indexOf("."));

if (webAddress.endsWith(".com")) {
    alert("The site is an international commercial site.");
}
else if (webAddress.endsWith(".org")) {
    alert("The site is an International corporate site.");
}
else if (webAddress.endsWith(".co.il")) {
    alert("The site is an Israeli commercial site.");
}
else if (webAddress.endsWith(".org.il")) {
    alert("The site is an Israeli corporate site.");
}
else if (webAddress.endsWith(".gov.il")) {
    alert("The site is an Israeli governmental site.");
}
else {
    alert("Different kind of site. ");
}

document.write(webExtension);

