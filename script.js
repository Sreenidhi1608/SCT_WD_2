let startTime, updatedTime, difference, timerInterval;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  display.textContent =
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds);
}

function startStop() {
  if (!isRunning) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00';
  laps.innerHTML = '';
  difference = 0;
  lapCount = 0;
  isRunning = false;
}

function lap() {
  if (isRunning) {
    lapCount++;
    const lapTime = display.textContent;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCount}: ${lapTime}`;
    laps.appendChild(li);
  }
}