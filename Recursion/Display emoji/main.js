"use strict";

(() => {

    // WHen the user clicks the button, emojis will be showed on the page:
    const displayEmoji = document.getElementById("displayEmoji");
    displayEmoji.addEventListener("click", () => {
        printEmoji(42);
    });
   
    // Recursive function to display the emojis:
    function printEmoji(n) {
        if(n <= 0) {
            return;
        }
        document.write("🙂");
        printEmoji(n - 1);
    }

})();