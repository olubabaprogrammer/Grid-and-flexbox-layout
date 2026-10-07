let searchbtn = document.getElementById("search-btn");  
let cityInput = document.getElementById("city-input");
let cityName = document.getElementById("city");
let countryCode = document.getElementById("country-code");
let temperature = document.getElementById("temperature");
let weatherIcon = document.getElementById("weather-icon");
let weatherDescription = document.getElementById("weather-description");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let errorMessage = document.getElementById("error-message");

const apiKey = "893566d701ae07fb583b32d3390dc327";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city) {
  try {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    if (data.cod !== 200) {
      errorMessage.textContent = "City not found. Please try again.";
      return;
    }

    errorMessage.textContent = "";

    // Display weather data
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.style.display = "block";

    document.querySelectorAll(".sun, .sun-ray, .cloud, .rain-cloud, .raindrop").forEach(el => el.remove());

    const mainDiv = document.getElementById("main-div");
    mainDiv.className = "";

    const condition = data.weather[0].main.toLowerCase();

    if (condition === "clear") {
      mainDiv.classList.add("sunny");

      const sun = document.createElement("div");
      sun.classList.add("sun");
      mainDiv.appendChild(sun);
 
      const rays = document.createElement("div");
      rays.classList.add("sun-ray");
      mainDiv.appendChild(rays);

    } else if (condition === "clouds") {
      mainDiv.classList.add("cloudy");

      for (let i = 0; i < 4; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.width = `${80 + i * 25}px`;
        cloud.style.height = `${30 + i * 8}px`;
        cloud.style.top = `${8 + i * 18}%`;
        cloud.style.animationDuration = `${7 + i * 3}s`;
        cloud.style.animationDelay = `${i * 2}s`;
        mainDiv.appendChild(cloud);
      }

    } else if (condition === "rain" || condition === "drizzle") {
      mainDiv.classList.add("rainy");

      for (let i = 0; i < 2; i++) {
        const rainCloud = document.createElement("div");
        rainCloud.classList.add("rain-cloud");
        rainCloud.style.width = `${120 + i * 40}px`;
        rainCloud.style.height = "35px";
        rainCloud.style.top = `${5 + i * 12}%`;
        rainCloud.style.animationDuration = `${10 + i * 4}s`;
        rainCloud.style.animationDelay = `${i * 3}s`;
        mainDiv.appendChild(rainCloud);
      }

      for (let i = 0; i < 35; i++) {
        const drop = document.createElement("div");
        drop.classList.add("raindrop");
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.height = `${12 + Math.random() * 18}px`;
        drop.style.animationDuration = `${0.4 + Math.random() * 0.8}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        mainDiv.appendChild(drop);
      }
    }

  } catch (error) {
    console.log(error.message);
    errorMessage.textContent = "City not found. Please try again.";
  }  
};

searchbtn.addEventListener("click", () => {
  let city = cityInput.value;
  if (city !== "") {
    getWeather(city);
  } else {
    alert("Please enter a city name.");    
  }
});

cityInput.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    let city = cityInput.value;
    if (city !== "") {
      getWeather(city);
    } else {
      alert("Please enter a city name.");    
    }
  }
})