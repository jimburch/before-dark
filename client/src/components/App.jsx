import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input.jsx';


const App = () => {
  const [sunset, setSunset] = useState('');
  const [runTime, setRunTime] = useState('');

  const getSunset = (e, zip, distance, pace) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/sunset/${zip}`,
      method: 'get'
    }

    axios(options)
    .then((response) => {
      setSunset(response.data);
    })
    .then(() => {
      findRunTime(distance, pace);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const findRunTime = (distance, pace) => {
    let numDist = Number(distance);
    let parts = pace.split(':');
    parts = parts.map(Number);
    let totalSeconds = (parts[0] * 60) + parts[1];
    let runTimeInSeconds = numDist * totalSeconds;
    let minutes = Math.floor(runTimeInSeconds / 60);
    let seconds = runTimeInSeconds - minutes * 60;
    let runTime = minutes + ':' + seconds;
    setRunTime(runTime);
  }

  return (
    <div>
      <h1>Before Dark</h1>
      <Input getSunset={getSunset} />
      <span>Sunset time: {sunset}</span>
      <span>Run time: {runTime}</span>
    </div>
  );
};

export default App;