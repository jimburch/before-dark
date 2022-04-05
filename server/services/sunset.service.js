const axios = require('axios');

const TOKEN = GOOGLE_MAPS_API_KEY.process.env;

const getCoordsAndSunset = (data, callback) => {
	axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=${config.TOKEN}`
		)
		.then(response => {
			const lat = response.data.results[0].geometry.location.lat;
			const lng = response.data.results[0].geometry.location.lng;
			return axios.get(
				`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
			);
		})
		.then(response => {
			callback(null, response.data.results.sunset);
		})
		.catch(err => {
			callback(err);
		});
};

module.exports = getCoordsAndSunset;
