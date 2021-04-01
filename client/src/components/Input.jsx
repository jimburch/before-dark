import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const Input = ({ toggle, getSunset }) => {
  const [distance, setDistance] = useState('');
  const [pace, setPace] = useState('');
  const [zip, setZip] = useState('');

  const handleDistance = e => {
    setDistance(e);
  }
  const handlePace = e => {
    setPace(e);
  }
  const handleZip = e => {
    setZip(e.target.value);
  }

  useEffect(() => {
    if (!toggle) {
      setDistance('');
      setPace('');
      setZip('');
    }
  }, [toggle])

  return (
    <div>
      <Form onSubmit={e => getSunset(e, zip, distance, pace)}>
        <Form.Label>How many miles do you want to run? {distance ? <span>{distance} mile(s) total</span> : null}</Form.Label>
          <DropdownButton title="Select Miles" onSelect={handleDistance}>
            <Dropdown.Item eventKey="1.0">1.0</Dropdown.Item>
            <Dropdown.Item eventKey="1.5">1.5</Dropdown.Item>
            <Dropdown.Item eventKey="2.0">2.0</Dropdown.Item>
            <Dropdown.Item eventKey="2.5">2.5</Dropdown.Item>
            <Dropdown.Item eventKey="3.0">3.0</Dropdown.Item>
            <Dropdown.Item eventKey="3.5">3.5</Dropdown.Item>
            <Dropdown.Item eventKey="4.0">4.0</Dropdown.Item>
            <Dropdown.Item eventKey="4.5">4.5</Dropdown.Item>
            <Dropdown.Item eventKey="5.0">5.0</Dropdown.Item>
            <Dropdown.Item eventKey="5.5">5.5</Dropdown.Item>
            <Dropdown.Item eventKey="6.0">6.0</Dropdown.Item>
            <Dropdown.Item eventKey="6.5">6.5</Dropdown.Item>
            <Dropdown.Item eventKey="7.0">7.0</Dropdown.Item>
            <Dropdown.Item eventKey="7.5">7.5</Dropdown.Item>
            <Dropdown.Item eventKey="8.0">8.0</Dropdown.Item>
            <Dropdown.Item eventKey="8.5">8.5</Dropdown.Item>
            <Dropdown.Item eventKey="9.0">9.0</Dropdown.Item>
            <Dropdown.Item eventKey="9.5">9.5</Dropdown.Item>
            <Dropdown.Item eventKey="10.0">10.0</Dropdown.Item>
          </DropdownButton>
        <Form.Label>How many minutes do you think it will take to run each mile, on average? {pace ? <span>{pace} minute(s) per mile</span> : null}</Form.Label>
          <DropdownButton title="Select Pace" onSelect={handlePace}>
            <Dropdown.Item eventKey="7:30">7:30</Dropdown.Item>
            <Dropdown.Item eventKey="7:45">7:45</Dropdown.Item>
            <Dropdown.Item eventKey="8:00">8:00</Dropdown.Item>
            <Dropdown.Item eventKey="8:15">8:15</Dropdown.Item>
            <Dropdown.Item eventKey="8:30">8:30</Dropdown.Item>
            <Dropdown.Item eventKey="8:45">8:45</Dropdown.Item>
            <Dropdown.Item eventKey="9:00">9:00</Dropdown.Item>
            <Dropdown.Item eventKey="9:15">9:15</Dropdown.Item>
            <Dropdown.Item eventKey="9:30">9:30</Dropdown.Item>
            <Dropdown.Item eventKey="9:45">9:45</Dropdown.Item>
            <Dropdown.Item eventKey="10:00">10:00</Dropdown.Item>
            <Dropdown.Item eventKey="10:15">10:15</Dropdown.Item>
            <Dropdown.Item eventKey="10:30">10:30</Dropdown.Item>
            <Dropdown.Item eventKey="10:45">10:45</Dropdown.Item>
            <Dropdown.Item eventKey="11:00">11:00</Dropdown.Item>
            <Dropdown.Item eventKey="11:15">11:15</Dropdown.Item>
            <Dropdown.Item eventKey="11:30">11:30</Dropdown.Item>
            <Dropdown.Item eventKey="11:45">11:45</Dropdown.Item>
            <Dropdown.Item eventKey="11:45">11:45</Dropdown.Item>
            <Dropdown.Item eventKey="12:00">12:00</Dropdown.Item>
          </DropdownButton>
        <Form.Group>
          <Form.Label>What's your zip code?</Form.Label>
          <Form.Control className="zip-form" type="zipcode" value={zip} placeholder="5 digit zip code" maxLength="5" onChange={handleZip} />
          <Form.Text>We use this to find your local sunset time.</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Input;