import React from 'react';

const Result = ({ sunset, runTime, leaveTime }) => (
  <div>
    <div>Tonight's sunset is at {sunset}</div>
    <div>Your run should take approximately {runTime}</div>
    <div>Leave by {leaveTime} to get home before dark!</div>
  </div>
);

export default Result;