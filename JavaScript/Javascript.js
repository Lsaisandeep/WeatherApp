const inputBox = document.querySelector('.input-box');//location 
const searchBtn = document.getElementById('searchBtn')//search 
const weather_img = document.querySelector('.weather-img')//weather img
const temperature = document.querySelector('.temperature')//temp
const description = document.querySelector('.description')//dec
const humidity = document.getElementById('humidity');//humidity
const wind_speed = document.getElementById('wind-speed')//wind-speed

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');



async function checkWeather(city){
    const api_key = "3e17b58a229ff1fa1902b32fbe766829"//api openwether 
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    

    const weather_data = await fetch(`${url}`).then
    (response => response.json());

    if(weather_data.code === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex"

    temperature.innerHTML = `${Math.round 
    (weather_data.main.temp - 273.15 )}°C`;

    description.innerHTML = `${weather_data.weather[0].desc}%`;

    humidity.innerHTML = `${weather_data.main.humidity} %`;

    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].mian){
        case 'Clouds':
            weather_img.src = "/Assets/Images/cloud"
            break;
        case 'clear':
            weather_img.src = "/Assets/Images/clear"
            break;
        case 'Rain':
            weather_img.src = "/Assets/Images/rain"
            break;
        case 'mist':
            weather_img.src = "/Assets/Images/mist"
            break;
        case 'snow':
            weather_img.src = "/Assets/Images/snow"
            break;
    }

    console.log(weather_data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});