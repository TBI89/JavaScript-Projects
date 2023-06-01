// On click, change the background color of the page to green:
function changeBackgroundColor() {
    document.body.style.backgroundColor = "green";//2 - javaScript sets the new color, but it's not visible yet.
    alert("Done"); //1 - The alert message will appear, and when the js execution finish, the new color will be visible.
}

// Setting a timeout in order to delay the alert (to appear after the background color has changed):
function changeBackgroundColorFirst() {
    document.body.style.backgroundColor = "green";//1
    setTimeout(() => {
        alert("Done"); //2
    }, 2000);
}