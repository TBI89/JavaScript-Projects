// When the user clicks the button,
//  Print a random number, etch second, from 0 to number inside the input:
function generateNumbers() {

    const numBox = document.getElementById("numBox");
    const numDiv = document.getElementById("numDiv");
    let num = +numBox.value;

    setInterval(() => {
      num = Math.floor(Math.random() * num);
        numDiv.innerText = num;
    }, 1000);
}