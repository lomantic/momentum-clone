
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//4fcb3cd47ee1909c0625ec36c6ac6dfe

const API_KEY = "4fcb3cd47ee1909c0625ec36c6ac6dfe";

function onGeoSuccess(position){
    //console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("you live in ", lat , lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data=>{
        console.log(data.name, data.weather[0].main);

        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText= data.name;
    });
}

function onGeoError(){
    alert("Can't find location. No weather info");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);