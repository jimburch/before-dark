import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Result = ({ sunset, runTime, leaveTime }) => (
  <div>
        <div className="result-sub">Tonight's sunset is at {sunset}</div>
        <div className="result-main">Start your run at {leaveTime} to get home before dark!</div>
        <div className="footnote">This app uses Google Maps geolocation API and Sunset Sunrise API. Developed by Jim Burch. Ideation & logo by Nik Donovic.</div>
  </div>
);

export default Result;