function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;

  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngeles.innerHTML = "los angeles";
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let amsterdam = document.querySelector("#amsterdam");
  let amsterdamDateElement = document.querySelector("#amsterdam-date");
  let amsterdamTimeElement = document.querySelector("#amsterdam-time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");

  amsterdam.innerHTML = "amsterdam";
  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let hongKong = document.querySelector("#hong-kong");
  let hongKongDateElement = document.querySelector("#hong-kong-date");
  let hongKongTimeElement = document.querySelector("#hong-kong-time");
  let hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKong.innerHTML = "hong kong";
  hongKongDateElement.innerHTML = hongKongTime.format("MMMM Do YYYY");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateClock();

setInterval(updateClock, 1000);

function alertCity(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:m A");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let city = document.querySelector("#city");
city.addEventListener("change", alertCity);
