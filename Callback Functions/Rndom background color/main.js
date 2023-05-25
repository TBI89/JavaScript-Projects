"use strict";

// Call the given function with a different one,
// that will paint the page with a random background color (from the array):
function amazing(paintCallback) {
  const colors = ["red", "green", "blue"];
  const paintedColor = paintCallback(colors);
  document.write("Painted color: " + paintedColor);
}

amazing(paintCallback => {
  const randomColor = paintCallback[Math.floor(Math.random() * paintCallback.length)];
  document.body.style.backgroundColor = randomColor;
  return randomColor;
});