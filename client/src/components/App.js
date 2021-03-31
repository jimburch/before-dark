import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Input.js';


const App = () => {
  const [sunset, setSunset] = useState('');

  const getSunset = (e, zip) => {
    e.preventDefault();
    const options = {
      url: `/sunset/${zip}`,
      method: 'get'
    }

    axios(options)
    .then((response) => {
      setSunset(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <h1>Before Dark</h1>
      <Input getSunset={getSunset} />
    </div>
  );
};

export default App;