var ApiKey = "c7eeeb41361234b4d229a78f7b609b2d";
var userForm = document.querySelector("#user-form");
var btnPrimary = document.querySelector(".btn-primary");
var cityInput = document.querySelector("#city");
var currentTemp = document.querySelector("#currentTemp");
var searchCity = document.querySelector("#searchCity");
var previousSearch = document.querySelector(".previousSearch");
var todaysForecast = document.querySelector(".todaysForecast");
var currentTemp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");

var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityInput.value.trim();

    if (city) {
        getCityForecast(city);

        currentTemp.textContent = "";
        cityInput.value = "";
    } else {
        alert("Please enter a city name");
    }
};

var getCityForecast = function searchApi() {
    var locQueryUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=minneapolis&appid=" +
        ApiKey +
        "&units=imperial";

    // "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + ApiKey

    fetch(locQueryUrl)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            let lon = res.city.coord.lon;
            let lat = res.city.coord.lat;
            let cityID = res.city.id;
            console.log("lat: " + lat, "Lon: " + lon);
            // displayWeather(res, city);

            // function forecast() {
            //     var forecastUrl =
            //         "https://api.openweathermap.org/data/2.5/forecast?id=" +
            //         cityID +
            //         "&appid=" +
            //         ApiKey;
            //     fetch(forecastUrl)
            //         .then((res) => res.json())
            //         .then((res) => {
            //             console.log(res.list.slice(0, 5));
            //         });
            // }

            function forecast(lat, lon) {
                var forecastUrl =
                    "https://api.openweathermap.org/data/2.5/forecast?id=" +
                    cityID +
                    "&appid=" +
                    ApiKey +
                    "&units=imperial";
                fetch(forecastUrl)
                    .then((res) => res.json())
                    .then((res) => {
                        var fiveDay = [];
                        fiveDay.push(
                            data.list[6],
                            data.list[14],
                            data.list[22],
                            data.list[30],
                            data.list[38]
                        );
                    });
            }

            forecast();
        });
};

// searchApi();

userForm.addEventListener("submit", formSubmitHandler);

// https://github.com/jnordan132/City-Weather-Dashboard/blob/main/script.js

// let storrageArray []

// function getApi happens each time. local storage happens once
// add local storage to ApiKey

// letlocationarray=json.parse(localstorage.getitem("search"))
// locationarray.push(locationsearch)
// console log
// localstorage.set item (search-history", json.stringify(locationarray))

// for loop inside it use java or jquesry
// create elements and apend to URL
// for loop itterate through
// var i = 0, i<locationarray.lenght; i++0{

// }
// declare variaable
// new search button =document.createElement.(button)
// searchbutton.textcontent=locationArray[i];
// append to parent element
// SpeechRecognitionResultList.appendsearch button  = empty on load search history appear on search event.
// set class attribute
// searchbtn.setattribute(class, btn, btn-lg)
// recentllist.append(searchbtn);

// to appear on load: storage array duplicate logic to run on load or pull logic into a function and use it
// copy the loop and drop it right after the local storage call

// on submit event need to clear the element. before the for loop

// recentlist.empty(): in front of for loop

// this will need to be a function. pulling out fetch logic (fetch city)then do the fetch logic

// event delegation for dynamically created Event
// write logic for that event.target get its text value plug into created function

// function uvApi() {
//     var uvUrl =
//         "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" +
//         lat +
//         "&lon=" +
//         lon +
//         "&appid=" +
//         ApiKey +
//         "&cnt=1";

// fetch(uvUrl)
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);
//         var uvIndex = res[0].value;
//         console.log(uvIndex);
