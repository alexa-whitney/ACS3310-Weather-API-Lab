// Functions 
async function getWeather(apikey, zip) {
	const units = 'imperial'
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`

	const res = await fetch(path)
	const json = await res.json()

	return json;
}

module.exports = {
	getWeather
};