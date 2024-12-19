

const apikey ="060665916f62ad7748c4fe6b2f0dea14";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="Img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="Img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="Img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="Img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="Img/mist.png";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})