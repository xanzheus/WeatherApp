let temperature = document.getElementById("temperature");
let city = document.getElementById("city");
let description = document.getElementById("description");
let wind = document.getElementById("wind-speed");
let change = document.getElementById("change");
let search = document.getElementById("search").value;
let icon = document.getElementById("icon");
let main = document.getElementById("main");
let humidity = document.getElementById("humidity");

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
     main.innerHTML = response.weather[0].main
     humidity.innerHTML = response.main.humidity + "%"
     icon.src = ("https://openweathermap.org/img/w/") + response.weather[0].icon + '.png'
     wind.innerHTML = response.wind.speed
     change.addEventListener('click', ()  => {
        c = Math.floor(weather - 273.15) + '°C';
        f = Math.floor(weather - 273.15) * 9/5 + 32 + '°F';
        if (temperature.innerHTML == c) {
        temperature.innerHTML = Math.floor(weather - 273.15) * 9/5 + 32 + '°F'; 
        } else if (temperature.innerHTML == f) {
           temperature.innerHTML = Math.floor(weather - 273.15) + '°C';
        }
     })
     if (response.weather[0].description == "clear sky") {
        let v1 = document.createElement('VIDEO');
        v1.setAttribute("src", "Clouds_Timelapse_66___30s___4k_res.mp4");
        v1.setAttribute("class", "v1")
        document.body.appendChild(v1)
        v1.autoplay = true;
        v1.load();
     } else if (response.weather[0].description == "few clouds") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "Clouds_Timelapse_66___30s___4k_res.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
     } else if (response.weather[0].description == "few clouds") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "Clouds_Timelapse_66___30s___4k_res.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
  }
  })
};