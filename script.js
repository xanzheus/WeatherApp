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

function submit() {
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+ document.getElementById("search").value + '&APPID=836ae263c4d8ea9e2a2657878ceaea61', {mode: 'cors'})
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
        v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/011/710/original/Clouds_Timelapse_21_-_60s_-_4k_res.mp4");
        v1.setAttribute("class", "v1")
        document.body.appendChild(v1)
        v1.autoplay = true;
        v1.load();
     } else if (response.weather[0].description == "few clouds") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/003/501/original/cloudysky.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
     } else if (response.weather[0].description == "scattered clouds") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/011/761/original/Clouds_Timelapse_57_-_30s_-_4k_res.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      }else if (response.weather[0].description == "broken clouds") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/007/196/original/dark_clouds_timelapse.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "overcast clouds") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/007/196/original/dark_clouds_timelapse.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      }  else if (response.weather[0].description == "thunderstorm") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "New Project ‐ Made with Clipchamp (1).mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "snow") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/019/708/original/winter2.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "haze") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/004/935/original/Foggy_Winter_4K_Living_Background.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "mist") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/004/935/original/Foggy_Winter_4K_Living_Background.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "fog") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/004/935/original/Foggy_Winter_4K_Living_Background.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "shower rain") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/007/202/original/parking_with_rain.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "light rain") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/007/202/original/parking_with_rain.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "smoke") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/004/935/original/Foggy_Winter_4K_Living_Background.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      } else if (response.weather[0].description == "rain") {
         let v1 = document.createElement('VIDEO');
         v1.setAttribute("src", "https://static.videezy.com/system/resources/previews/000/007/202/original/parking_with_rain.mp4");
         v1.setAttribute("class", "v1")
         document.body.appendChild(v1)
         v1.autoplay = true;
         v1.load();
      }
  })
};
