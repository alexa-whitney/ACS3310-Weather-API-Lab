// Functions 
function getWeather(apikey, zip, callback) {
	// Replace this with your own API key!
	// const apiKey = '467355df4c808dd6134a3b64e9ace282'
	const units = 'imperial'
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
	fetch(path)
			.then(res => res.json())
			.then(json => {
					callback(json) // Passing the fetched data to the callback function
			})
			.catch(err => console.log(err.message))
}

module.exports = {
	getWeather
};