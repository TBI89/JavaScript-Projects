// Call the given function and send her another function that display a random number on the page:
function cool1(callback) {
    callback();
}
cool1(n => document.write(n = Math.floor(Math.random() * 100)));