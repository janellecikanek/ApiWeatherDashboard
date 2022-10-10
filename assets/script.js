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

// var formSubmitHandler = function (event) {
//     event.preventDefault();

//     var city = cityInput.value.trim();

//     if (city) {
//         getCityForecast(city);

//         currentTemp.textContent = "";
//         cityInput.value = "";
//     } else {
//         alert("Please enter a city name");
//     }
// };

 function searchApi() {
    var locQueryUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" + "austin" + "&appid=" +
        ApiKey + "&units=imperial";

    fetch(locQueryUrl)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var cityID = res.city.id;
            var currentDate = new Date()
            console.log(currentDate)
            var day = currentDate.getDate()
            var month = currentDate.getMonth() + 1
            var year = currentDate.getFullYear()
            nameEl.innerHTML = "res.name" + " (" + month + "/" + day + "/" + year + ") ";
           currentTempEl.innerHTML= "Temp: " + res.list[0].main.temp + " &#176F";
           currentHumidityEl.innerHTML = "Humidity: " + res.list[0].main.humidity + "%";
           currentWindEl.innerHTML = "Wind: " + res.list[0].wind.speed + "mph";
           var weatherImage = res.list[0].weather[0].icon;
           currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherImage + "@2x.png");
           currentPicEl.setAttribute("alt", res.list[0].weather[0].description);
        });
};

searchApi()



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

// // 
// function forecast(lat, lon) {
//     var forecastUrl =
//         "https://api.openweathermap.org/data/2.5/forecast?id=" +
//         cityID +
//         "&appid=" +
//         ApiKey +
//         "&units=imperial";
//     fetch(forecastUrl)
//         .then((res) => res.json())
//         .then((res) => {
//             var fiveDay = [];
//             fiveDay.push(
//                 data.list[6],
//                 data.list[14],
//                 data.list[22],
//                 data.list[30],
//                 data.list[38]
//             );
//         });
// }

// forecast();












function uvApi() {
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
