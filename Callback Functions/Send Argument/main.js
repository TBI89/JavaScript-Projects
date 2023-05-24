// Call the given function and send her the number in the argument (42):
function nice(callback) {
    callback(42);
}
nice(n => document.write(n + "<hr>"));