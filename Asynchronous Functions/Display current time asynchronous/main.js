// Display start, end, local time:
function showStartTimeEnd() {
    console.log("Start"); //1

    setTimeout(() => {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        console.log(hour + ":" + minute + ":" + second); //3
    }, 3000)

    console.log("End"); //2
}