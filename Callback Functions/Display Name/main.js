
// Display my name on the page using "Normal Function":
showMyName(() => document.write("Tomer Ben Israel"));
function showMyName(callback) {
    callback(showMyName);
}