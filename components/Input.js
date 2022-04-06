import React, { useState, useEffect } from 'react';

const Input = ({ toggle, getSunset }) => {
	const [distance, setDistance] = useState('');
	const [pace, setPace] = useState('');
	const [zip, setZip] = useState('');
	const [miles, setMiles] = useState([]);
	const [minutes, setMinutes] = useState([]);

	const handleDistance = e => {
		setDistance(e.target.value);
	};

	const handlePace = e => {
		setPace(e.target.value);
	};

	const handleZip = e => {
		setZip(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!distance || !pace || !zip) {
			alert('Please fill in all fields!');
		} else {
			getSunset(zip, distance, pace);
		}
	};

	const buildMilesArray = () => {
		const result = [];
		for (let i = 1; i <= 10; i += 0.5) {
			result.push(i.toFixed(1));
		}
		setMiles(result);
	};

	const buildMinutesArray = () => {
		const result = [];
		let minutes = 7;
		let seconds = 0;
		while (minutes <= 15) {
			if (seconds === 0) {
				result.push(minutes + ':00');
			} else {
				result.push(minutes + ':' + seconds);
			}
			if (seconds === 45) {
				minutes += 1;
				seconds = 0;
			} else {
				seconds += 15;
			}
		}
		setMinutes(result);
	};

	useEffect(() => {
		if (!toggle) {
			setDistance('');
			setPace('');
			setZip('');
		}
		buildMilesArray();
		buildMinutesArray();
	}, [toggle]);

	return (
		<div className="input-container">
			<form className="input-form" onSubmit={handleSubmit}>
				<div className="distance-label">How many miles do you want to run?</div>
				{distance ? (
					<div className="selected">{distance} mile(s) total</div>
				) : null}
				<div className="custom-select">
					<select onChange={handleDistance}>
						<option value="">Select Distance:</option>
						{miles.map((mile, index) => (
							<option key={index} value={mile}>
								{mile}
							</option>
						))}
					</select>
				</div>
				<div className="pace-label">
					How many minutes do you think it will take to run each mile, on
					average?
				</div>
				{pace ? <div className="selected">{pace} per mile</div> : null}
				<div className="custom-select">
					<select onChange={handlePace}>
						<option value="">Select Pace</option>
						{minutes.map((minute, index) => (
							<option key={index} value={minute}>
								{minute}
							</option>
						))}
					</select>
				</div>
				<div className="zip-label">What's your zip code?</div>
				<input
					className="zip-form"
					type="text"
					value={zip}
					placeholder="5 digit zip code"
					maxLength="5"
					onChange={handleZip}
					autoComplete="off"
				/>
				<div className="zip-privacy">
					We use this to find your local sunset time
				</div>
				<input className="submit" type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Input;
