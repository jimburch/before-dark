const getCoordsAndSunset = require('../services/sunset.service.js');

const getSunset = (req, res) => {
	getCoordsAndSunset(req.params.zip, (err, results) => {
		err ? res.sendStatus(500) : res.send(results);
	});
};

module.exports = getSunset;
