const apiKey =  "ac0dbf893f99468a48d4925b7e615615";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            alert("City not found!");
            return;
        }
        const data = await response.json();
        
        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        description.innerHTML = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityInput.value);
});
