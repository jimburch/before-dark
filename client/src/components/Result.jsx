import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Result = ({ sunset, runTime, leaveTime }) => (
  <div>
        <div className="result-sub">Tonight's sunset is at {sunset}</div>
        <div className="result-main">Leave by {leaveTime} to get home before dark!</div>
  </div>
);

export default Result;