let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer); // Clear any existing timer
    }
    timer = setInterval(stopWatch, 1000); // Start a new timer
}

function watchStop() {
    clearInterval(timer); // Stop the timer
}

function watchReset() {
    clearInterval(timer); // Stop the timer
    [seconds, minutes, hours] = [0, 0, 0]; // Reset time to zero
    displayTime.innerHTML = "00:00:00"; // Update display to show reset time
}
