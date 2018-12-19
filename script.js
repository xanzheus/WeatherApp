let temperature = document.getElementById("temperature");
let city = document.getElementById("city");
let description = document.getElementById("description");
let wind = document.getElementById("wind-speed");
let change = document.getElementById("change");
let search = document.getElementById("search").value;

function reload() {
   location.reload();
}

function Submit() {
   fetch('http://api.openweathermap.org/data/2.5/weather?q='+ search + '&APPID=836ae263c4d8ea9e2a2657878ceaea61', {mode: 'cors'})
   .then(function(response) {
      return response.json()
   })
   .then(function(response) {
     let weather = response.main.temp
     temperature.innerHTML = Math.floor(weather - 273.15) + '°C';
     city.innerHTML = response.name
     description.innerHTML = response.weather[0].description
     wind.innerHTML = response.wind.speed
     change.addEventListener('click', ()  => {
        temperature.innerHTML = Math.floor(weather - 273.15) * 9/5 + 32 + '°F'; 
     })
  })
};