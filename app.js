let clock = document.getElementById("clock");

function refreshClock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  clock.innerHTML = hour + ":" + minute + ":" + second;
}

setInterval(refreshClock, 1000);
