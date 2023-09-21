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

function alertCity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(
        `It is ${moment()
          .tz("Europe/Paris")
          .format("dddd, MMMM D, YYYY h:m A")} in Europe/Paris`
      );
    }
    if (event.target.value === "tokyo") {
      alert(
        `It is ${moment()
          .tz("Asia/Tokyo")
          .format("dddd, MMMM D, YYYY h:m A")} in Asia/Tokyo`
      );
    }
    if (event.target.value === "sydney") {
      alert(
        `It is ${moment()
          .tz("Australia/Sydney")
          .format("dddd, MMMM D, YYYY h:m A")} in Australia/Sydney`
      );
    }
  }
}

let city = document.querySelector("#city");
city.addEventListener("change", alertCity);
