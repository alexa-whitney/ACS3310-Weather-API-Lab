// Functions 
async function getWeather(apikey, zip, unit = 'imperial') {
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`

	const res = await fetch(path)
	const json = await res.json()

	// Organize the data
	const organizedData = {
		temperature: json.main.temp,
		description: json.weather[0].description,
		humidity: json.main.humidity,
		temp_max: json.main.temp_max,
		temp_min: json.main.temp_min,
		city: json.name,
		icon: json.weather[0].icon
	};

	return organizedData;
}

module.exports = {
	getWeather
};