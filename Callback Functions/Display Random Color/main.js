// Call the given function and send her another one that paints the page in a random color:
function cool2(paintCallback) {
    paintCallback();
}
cool2(() => {
    const colors = ["red", "green", "blue"];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    return;
})

