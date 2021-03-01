import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const Index = () => {

  const [ sunset, setSunset ] = useState({});
  const [ departure, setDeparture ] = useState('');
  const [ zipCode, setZipCode ] = useState(null);

  const getSunset = (latitude, longitude) => {
    axios.get('https://api.sunrise-sunset.org/json', {
      params: {
        lat: latitude,
        lng: longitude
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const getCoordinates = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: zipCode,
        key: config.TOKEN
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const handleZipCodeChange = (e) => {
    e.preventDefault();
    setZipCode(e.target.value);
    console.log(zipCode);
  }

  return (
    <div>
      <h1>Before Dark</h1>
      <form onSubmit={(e) => getCoordinates(e)}>
        <input type="text" maxLength="5" placeholder="zip" onChange={(e) => handleZipCodeChange(e)}/>
        <input type="text" placeholder="distance" />
        <input type="text" placeholder="pace" />
        <input type="button" value="submit" />
      </form>
      <div>{departure}</div>
    </div>
  );
};

export default Index;