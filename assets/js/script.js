document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "2edee5c9e9a3e5ebd092c92ecea1d740";
  const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";

  const cityInput = document.getElementById("city-input");
  const searchForm = document.getElementById("search-form");
  const weatherInfo = document.getElementById("weather-info");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const currentWeatherResponse = await fetch(
        `${currentWeatherUrl}?q=${city}&appid=${apiKey}`
      );
      const forecastResponse = await fetch(
        `${forecastUrl}?q=${city}&appid=${apiKey}`
      );

      const currentWeatherData = await currentWeatherResponse.json();
      const forecastData = await forecastResponse.json();

      if (currentWeatherResponse.ok && forecastResponse.ok) {
        displayCurrentWeather(currentWeatherData);
        display5DayForecast(forecastData);
      } else {
        weatherInfo.innerHTML = `City not found. Please try again.`;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      weatherInfo.innerHTML =
        "Error fetching weather data. Please try again later.";
    }
  });
});
