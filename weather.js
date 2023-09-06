const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

async function fetchWeather(url) {
    const res = await fetch(url);
    const json = await res.json();

    return {
        temperature: json.main.temp,
        description: json.weather[0].description,
        humidity: json.main.humidity,
        temp_max: json.main.temp_max,
        temp_min: json.main.temp_min,
        city: json.name,
        icon: json.weather[0].icon
    };
}

async function getWeatherByZip(apiKey, zip, unit = 'imperial') {
    const url = `${BASE_URL}zip=${zip}&appid=${apiKey}&units=${unit}`;
    return await fetchWeather(url);
}

async function getWeatherByCity(apiKey, city, unit = 'imperial') {
    const url = `${BASE_URL}q=${city}&appid=${apiKey}&units=${unit}`;
    return await fetchWeather(url);
}

async function getWeatherByGeo(apiKey, coords, unit = 'imperial') {
    const { lat, lon } = coords;
    const url = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    return await fetchWeather(url);
}

module.exports = {
    getWeatherByZip,
    getWeatherByCity,
    getWeatherByGeo
};
