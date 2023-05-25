"use strict";

// Call the given function and send her another one that changes the background color to green:
function nice(paintCallback) {
    paintCallback("green");
}
nice(paintCallback =>  document.body.style.backgroundColor = paintCallback );
