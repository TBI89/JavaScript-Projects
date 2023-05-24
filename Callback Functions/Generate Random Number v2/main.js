// Call the given function and return one of the numbers (from the argument randomly):
function amazing(callback) {
    const num = callback();
    document.write("Num: " + num);
}
amazing(() => {
    const numbers = [42, 128, 37, 81, 66];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
});