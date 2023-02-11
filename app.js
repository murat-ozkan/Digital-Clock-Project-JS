let clock = document.getElementById("clock");

function refreshClock() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (hours < 10) {
    hours = 0 + hours;
  }
  if (minute < 10) {
    minute = 0 + minute;
  }
  if (second < 10) {
    second = 0 + second;
  }
  clock.innerHTML = hours + ":" + minute + ":" + second;
}

setInterval(refreshClock, 1000);
