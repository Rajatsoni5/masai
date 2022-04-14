// src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 
 async function Getit(){

//    try {
    let city = document.getElementById("city").value;

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2cc6f2187caea11b4c880e14cc75c11`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        append(res)
        console.log(res)
    })
    .catch(function (err){
        console.log(err);
    });

//     let res = await data.json();
//     console.log(res)
//     append(res)
   

//    } catch (error) {
//        console.log(error)
//    }


}

function getdata2(lat,lon){
    let city = document.getElementById("city").value;

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f2cc6f2187caea11b4c880e14cc75c11`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        append(res)
        console.log(res)
    })
    .catch(function (err){
        console.log(err);
    });


}


function append(data){

    let container = document.createElement("container");
    container.className = "container"
    container.innerHTML = null;

    let map = document.getElementById("gmap_canvas")


    let city = document.createElement("h4")
    city.className = "city"
    city.innerText = `City: ${data.city}`

    let min = document.createElement("p")
    min.innerText = `Min_temp: ${data.main.temp_min}`
    
    let max = document.createElement("p")
    min.innerText = data.main.temp_max;

    let humidity = document.createElement("p")
    humidity.innerText = data.main.humidity;

    let current = document.createElement("p")
    current.innerText = data.main.temp;

    container.append(city, min, max, humidity, current)
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}


function getweather(){

    navigator.geolocation.getCurrentPosition(success);

    function success(pos){
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        getdata2(crd.latitude,crd.longitude)
    }
 
}

