const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = "Plz write the city name before search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e978ce4727fdbfcf48f04546332c1b2e`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerHTML = arrData[0].main.temp;
      temp_status.innerHTML = arrData[0].weather[0].main;
      const tempMood = arrData[0].weather[0].main;

      //condition to check sunny or cloudy
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud'  style='color: #eccc68'></i> ";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud'  style='color: #f1f2f6'></i> ";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud'  style='color: #a4b0be'></i> ";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-cloud'  style='color: #eccc68'></i> ";
      }

      datahide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerHTML = "Plz enter the city name properly";
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
