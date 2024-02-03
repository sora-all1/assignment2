const timeHours = document.getElementById("time-hours");
const timeMinutes = document.getElementById("time-minutes");
const timeSeconds = document.getElementById("time-seconds");
const timeMilliseconds = document.getElementById("time-milliseconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const ressetButton = document.getElementById("resset");

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(1);
  const m = String(currentTime.getMinutes()).padStart(1);
  const s = String(currentTime.getSeconds()).padStart(1);
  const ms = String(currentTime.getMilliseconds()).padStart(3,"0")[0];
  
  timeHours.textContent = h;
  timeMinutes.textContent = m;
  timeSeconds.textContent = s;
  timeMilliseconds.textContent = ms;
  timeoutID = setTimeout(displayTime, 1);
}

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  ressetButton.disabled = false;
  startTime = Date.now();
  displayTime();
});

stopButton.addEventListener("click", function () {
  startButton.disabled = false;
  stopButton.disabled = true;
  ressetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

ressetButton.addEventListener("click", function () {
  startButton.disabled = false;
  stopButton.disabled = true;
  ressetButton.disabled = true;
  timeHours.textContent = "0"
  timeMinutes.textContent = "0"
  timeSeconds.textContent = "0"
  timeMilliseconds.textContent = "0"
  stopTime = 0;
});