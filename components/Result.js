const Result = ({ sunset, runTime, leaveTime }) => (
  <div>
    <div className="result-sub">Tonight's sunset is at {sunset}</div>
    <div className="result-main">Start your run at {leaveTime} to get home before dark!</div>
  </div>
);

export default Result;