import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Result = ({ sunset, runTime, leaveTime }) => (
  <Container>
    <Row>
      <Col>
        <div>Tonight's sunset is at {sunset}</div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div>Your run should take approximately {runTime}</div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div>Leave by {leaveTime} to get home before dark!</div>
      </Col>
    </Row>
  </Container>
);

export default Result;