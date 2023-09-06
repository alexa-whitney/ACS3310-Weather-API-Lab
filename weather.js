// Functions 
function getWeather(apikey, zip) {
	const units = 'imperial'
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`

	// Return the Promise directly
	return fetch(path)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		});
}

module.exports = {
	getWeather
};