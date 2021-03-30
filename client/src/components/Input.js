import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';

const Input = () => {
  const [distance, setDistance] = useState(0);
  const [pace, setPace] = useState(0);
  const [zip, setZip] = useState(0);

  return (
    <div>
      <form>
        <label>
          How far do you want to run?
          <input type="text" name="distance" />
        </label>
        <label>
          What's your running pace?
          <input type="text" name="pace" />
        </label>
        <label>
          Where do you live? (we use this to find your sunset time)
          <input type="text" name="zip" />
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