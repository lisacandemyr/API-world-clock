function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
}

updateClock();

setInterval(updateClock, 1000);
