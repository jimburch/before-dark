import React from 'react';

const Result = ({ sunset, runTime, leaveTime }) => (
	<div className="result-container">
		<div className="result-sub">Tonight's sunset is at {sunset}</div>
		<div className="leave-time">{leaveTime}</div>
		<div className="result-main">
			Leave before {leaveTime} to beat the sunset!
		</div>
	</div>
);

export default Result;
