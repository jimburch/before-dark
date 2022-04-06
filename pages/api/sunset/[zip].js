require('dotenv').config();
const axios = require('axios');
const TOKEN = process.env.GOOGLE_MAPS_API_KEY;

export default function handler(req, res) {
	const zip = req.query.zip;
	return new Promise((resolve, reject) => {
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${TOKEN}`
			)
			.then(response => {
				const lat = response.data.results[0].geometry.location.lat;
				const lng = response.data.results[0].geometry.location.lng;
				return axios.get(
					`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
				);
			})
			.then(response => {
				res.status(200).json(response.data.results.sunset);
				resolve();
			})
			.catch(err => {
				console.error(err);
				res.sendStatus(500);
				resolve();
			});
	});
}
