import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Input = ({ toggle, getSunset }) => {
  const [state, setState] = useState({
    distance: '',
    pace: '',
    zip: ''
  });

  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setState({ ...state, [key]: (value) })
  }

  useEffect(() => {
    if (!toggle) { setState({
      distance: '',
      pace: '',
      zip: ''
    }); }
  }, [toggle])

  return (
    <div>
      <form onSubmit={e => getSunset(e, state.zip, state.distance, state.pace)}>
        <label>
          How far do you want to run?
          <input type="text" name="distance" value={state.distance} onChange={e => handleChange(e)} />
        </label>
        <label>
          What's your running pace?
          <input type="text" name="pace" value={state.pace} onChange={e => handleChange(e)} />
        </label>
        <label>
          Where do you live? (we use this to find your sunset time)
          <input type="text" name="zip" value={state.zip} onChange={e => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Input;