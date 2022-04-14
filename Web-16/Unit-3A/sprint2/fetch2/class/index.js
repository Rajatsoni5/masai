// api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=f2cc6f2187caea11b4c880e14cc75c11


function getData() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2cc6f2187caea11b4c880e14cc75c11
    `;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

//   async function getData() {
//     let city = document.getElementById("city").value;
  
//         const res = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt={cnt}&appid=f2cc6f2187caea11b4c880e14cc75c11
//         `)
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (res) {
//         // append(res);
//         console.log("ok",res);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
  
//   function getDataLocation(lat, lon) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f2cc6f2187caea11b4c880e14cc75c11
//     `;
  
//     fetch(url)
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (res) {
//         append(res);
//         console.log(res);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
  
  function append(data) {
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;
  
    let city = document.createElement("h2");
    city.className = "city"
    city.innerText = `City: ${data.name}`;
  
    let min = document.createElement("p");
    min.innerText = `Min temp: ${data.main.temp_min}`;
    min.className = "text"
  
    let max = document.createElement("p");
    max.innerText = `Max temp: ${data.main.temp_max}`;
    max.className = "text"
  
    let clouds = document.createElement("p");
    clouds.innerText = `Current Temp: ${data.clouds.all}`;
    clouds.className = "text"

    let sunrise = document.createElement("p");
    sunrise.innerText = `Sunrise: ${data.sys.sunrise}`;
    sunrise.className = "text"

    let sunset = document.createElement("p");
    sunset.innerText = `Sunset: ${data.sys.sunset}`;
    sunset.className = "text"
  
    let wind = document.createElement("p");
    wind.innerText = `Wind: ${data.wind.speed}`;
    wind.className = "text"
  
    container.append(city,sunrise,sunset, min, max, clouds, wind);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
  
//   function getWeather() {
//     navigator.geolocation.getCurrentPosition(success);
  
//     function success(position) {
//       let crd = position.coords;
  
//       console.log("Your current position is:");
//       console.log(`Latitude : ${crd.latitude}`);
//       console.log(`Longitude: ${crd.longitude}`);
//       console.log(`More or less ${crd.accuracy} meters.`);
  
//       getDataLocation(crd.latitude, crd.longitude);
//     }
//   }
  

async function forecast(){
    let city = document.getElementById("city").value;

    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f2cc6f2187caea11b4c880e14cc75c11`)

    let more = await data.json()

    console.log("More", more)


}