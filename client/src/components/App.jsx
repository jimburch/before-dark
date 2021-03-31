import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input.jsx';

const App = () => {
  const [sunset, setSunset] = useState('');
  const [runTime, setRunTime] = useState('');
  const [leaveTime, setLeaveTime] = useState('');

  const getSunset = (e, zip, distance, pace) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/sunset/${zip}`,
      method: 'get'
    }

    axios(options)
    .then((response) => {
      findLocalSunset(response.data);
    })
    .then(() => {
      findRunTime(distance, pace);
    })
    .then(() => {
      findLeaveTime(sunset, runTime);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const findRunTime = (distance, pace) => {
    let numDist = Number(distance);
    let totalSeconds = minutesToSeconds(pace);
    let runTimeInSeconds = numDist * totalSeconds;
    let runTime = secondsToMinutes(runTimeInSeconds);
    setRunTime(runTime);
  }

  const findLocalSunset = (time) => {
    let [month, date, year] = new Date().toLocaleDateString('en-US', { timeZone: 'Europe/London' }).split('/');
    let local = new Date(`${month}/${date}/${year} ${time} UTC`)
    let localTime = local.toTimeString();
    setSunset(localTime);
  }

  const findLeaveTime = (sundown, run) => {
    console.log(sundown, run);
    let sunsetSeconds = hoursToSeconds(sundown);
    let runSeconds = minutesToSeconds(run);
    let leaveTimeInSeconds = sunsetSeconds - runSeconds;
    // console.log('sunset and run: ', sunsetSeconds, runSeconds);
    // console.log('leave in seconds: ', leaveTimeInSeconds);
    let leaveTime = secondsToHours(leaveTimeInSeconds);
    // console.log('leave time: ', leaveTime);
    setLeaveTime(leaveTime);
  }

  const minutesToSeconds = time => {
    let parts = time.split(':');
    parts = parts.map(Number);
    return (parts[0] * 60) + parts[1];
  }

  const secondsToMinutes = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes + ':' + seconds;
  }

  const hoursToSeconds = time => {
    let parts = time.split(/[ :]+/);
    console.log('split: ', parts)
    parts = parts.map(Number);
    console.log('parts: ', parts)
    return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
  }

  const secondsToHours = time => {
    let hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let ampm = 'PM'
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 12) {
      ampm = 'AM'
    }
    if (hours > 12) {
      hours -= 12;
    }
    return hours + ':' + minutes + ' ' + ampm;
  }

  return (
    <div>
      <h1>Before Dark</h1>
      <Input getSunset={getSunset} />
      <div>Tonight's sunset is at {sunset}</div>
      <div>Your run should take approximately {runTime}</div>
      <div>Leave by {leaveTime} to get home before dark!</div>
    </div>
  );
};

export default App;