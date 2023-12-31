function updateClock() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("Do of MMMM, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let amsterdam = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdam.querySelector(".date");
  let amsterdamTimeElement = amsterdam.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");

  amsterdamDateElement.innerHTML = amsterdamTime.format("Do of MMMM, YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let hongKong = document.querySelector("#hong-kong");
  let hongKongDateElement = hongKong.querySelector(".date");
  let hongKongTimeElement = hongKong.querySelector(".time");
  let hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKongDateElement.innerHTML = hongKongTime.format("Do of MMMM, YYYY");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let london = document.querySelector("#london");
  let londonDateElement = london.querySelector(".date");
  let londonTimeElement = london.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("Do of MMMM, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateClock();
setInterval(updateClock, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city-name">
          <h2>${cityName}.</h2>
          <div class="date">${cityTime.format("Do of MMMM, YYYY")}</div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
          <hr />
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
