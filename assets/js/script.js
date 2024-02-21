document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '2edee5c9e9a3e5ebd092c92ecea1d740';
    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    const cityInput = document.getElementById('city-input');
    const searchForm = document.getElementById('search-form');
    const weatherInfo = document.getElementById('weather-info');