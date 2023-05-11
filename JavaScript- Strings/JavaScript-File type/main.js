"use strict";

// Collect file name from the user:

const fileName = prompt("Enter the file name: ");
const fileExtension = fileName.substring(fileName.lastIndexOf("."));

// Display message if the file type is an image (otherwise, don't do anything):

if (fileName.endsWith(".png")) {
    alert("The file is an image");
}
else if (fileName.endsWith(".jpeg")) {
    alert("The file is an image");
}
else if (fileName.endsWith(".png")) {
    alert("The file is an image");
}
else if (fileName.endsWith(".gif")) {
    alert("The file is an image");
}
else if (fileName.endsWith(".tiff")) {
    alert("The file is an image");
}
else if (fileName.endsWith(".bmp")) {
    alert("The file is an image");
}
else if (fileName.endsWith(".webp")) {
    alert("The file is an image");
}