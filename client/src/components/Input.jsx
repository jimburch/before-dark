import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Input = ({ getSunset }) => {
  // const [distance, setDistance] = useState(0);
  // const [pace, setPace] = useState(0);
  // const [zip, setZip] = useState(0);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setState({ ...state, [key]: (value) })
  }

  return (
    <div>
      <form onSubmit={e => getSunset(e, state.zip, state.distance, state.pace)}>
        <label>
          How far do you want to run?
          <input type="text" name="distance" onChange={e => handleChange(e)} />
        </label>
        <label>
          What's your running pace?
          <input type="text" name="pace" onChange={e => handleChange(e)} />
        </label>
        <label>
          Where do you live? (we use this to find your sunset time)
          <input type="text" name="zip" onChange={e => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Input;

/*
<Form>
<Form.Group>
  <Form.Label>How far do you want to run?</Form.Label>
  <Form.Control type="text" placeholder="miles" />
</Form.Group>
<Form.Group>
  <Form.Label>What's your pace?</Form.Label>
  <Form.Control type="text" placeholder="miles" />
</Form.Group>
<Form.Group>
  <Form.Label>What's your zip code?</Form.Label>
  <Form.Control type="text" placeholder="miles" />
  <Form.Text>We use this to find your sunset time.</Form.Text>
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
*/