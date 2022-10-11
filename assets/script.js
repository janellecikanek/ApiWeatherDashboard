var ApiKey = "c7eeeb41361234b4d229a78f7b609b2d";
const inputEl = document.getElementById("city-input");
const searchEl = document.getElementById("search-button");
const clearEl = document.getElementById("clear-history");
const nameEl = document.getElementById("city-name");
const currentPicEl = document.getElementById("current-pic");
const currentTempEl = document.getElementById("temperature");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const historyEl = document.getElementById("history");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

//When I search for a city then I am presented with current and future conditions for that city.
// I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

function searchApi() {
  var locQueryUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    "city" +
    "&appid=" +
    ApiKey +
    "&units=imperial";
  fetch(locQueryUrl)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      var cityID = res.city.id;
      var currentDate = new Date();
      console.log(currentDate);
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      nameEl.innerHTML =
        "res.name" + " (" + month + "/" + day + "/" + year + ") ";
      currentTempEl.innerHTML = "Temp: " + res.list[0].main.temp + " &#176F";
      currentHumidityEl.innerHTML =
        "Humidity: " + res.list[0].main.humidity + "%";
      currentWindEl.innerHTML = "Wind: " + res.list[0].wind.speed + "mph";
      var weatherImage = res.list[0].weather[0].icon;
      currentPicEl.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + weatherImage + "@2x.png"
      );
      currentPicEl.setAttribute("alt", res.list[0].weather[0].description);
      nameEl.innerHTML = res.city.name;
      let lon = res.city.coord.lon;
      let lat = res.city.coord.lat;

      // WHEN I click on a city in the search history
      // THEN I am again presented with current and future conditions for that city
      // let storrageArray []
      letlocationarray = JSON.parse(localstorage.getitem("searchApi"));
      locationarray.push(searchHistory);
      localstorage.setitem(searchHistory, JSON.stringify(locationarray));
      historyEl.innerHTML = "";

      //recentlist.empty():
      // function (searchHistory){
      //(var i=0; i<searchHistory.length; i++){
      // };

      // historyBtn =document.createElement.(button)
      // historyBtn.textcontent=locationArray[i];
      // searchbtn.setattribute(class, btn, btn-lg)
      // recentList.append(searchbtn);
    });
}

searchEl.addEventListener("click", function () {
  var city = inputEl.value.trim();
  console.log(click);
  if (city) {
    searchApi(city);
  } else {
    alert("Please enter a city name");
  }
});

searchApi();

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

    function forecast(lat, lon) {
        let forecastUrl =
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            lat +
            "&lon=" +
            lon +
            "&appid=" +
            ApiKey;
        "&units=imperial";
        fetch(forecastUrl)
            .then((res) => res.json())
            .then((res) => {
                var fiveDay = [];
                fiveDay.push(
                    res.list[6],
                    res.list[14],
                    res.list[22],
                    res.list[30],
                    res.list[38]
                );
            });
    };

   forecast();


