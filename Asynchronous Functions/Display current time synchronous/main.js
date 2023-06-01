// Display start, local time, end:
function showStartTimeEnd() {
    console.log("Start"); //1
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    console.log(hour + ":" + minute + ":" + second); //2
    console.log("End"); //3
}