// const getCoordsAndSunset = require('../models/sunset.js');
import cors from 'cors';
import axios from 'axios';
import config from '../../../config.js';

const getCoordsAndSunset = (data, callback) => {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=${config.TOKEN}`)
  .then((response) => {
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    return axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
  })
  .then((response) => {
    callback(null, response.data.results.sunset);
  })
  .catch((err) => {
    callback(err);
  })
}

const getSunset = async (req, res) => {
  const { zip } = req.query;
  getCoordsAndSunset(zip, (err, results) => {
    err ? res.sendStatus(500) : res.send(results);
  })
};

export default getSunset;