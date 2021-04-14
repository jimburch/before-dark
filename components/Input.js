import { useState, useEffect } from 'react';

const Input = ({ toggle, getSunset }) => {
  const [distance, setDistance] = useState('');
  const [pace, setPace] = useState('');
  const [zip, setZip] = useState('');
  const [miles, setMiles] = useState([]);
  const [minutes, setMinutes] = useState([]);

  const handleDistance = e => {
    setDistance(e.target.value);
  }
  const handlePace = e => {
    setPace(e.target.value);
  }
  const handleZip = e => {
    setZip(e.target.value);
  }

  const buildMilesArray = () => {
    const result = [];
    for (let i = 1; i <= 10; i += 0.5) {
      result.push(i);
    }
    setMiles(result);
  };

  const buildMinutesArray = () => {
    const result = [];
    let minutes = 7;
    let seconds = 0;
    while (minutes < 15) {
      let time = minutes + ':' + seconds;
      result.push(time);
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
    };
    buildMilesArray();
    buildMinutesArray();
  }, [toggle])

  return (
    <div className="input-container">
      <form onSubmit={e => getSunset(e, zip, distance, pace)}>
        <div>How many miles do you want to run?</div>
        {distance ? <div className="selected">{distance} mile(s) total</div> : null}
        <select onChange={handleDistance}>
          {miles.map((mile, index) => (
            <option key={index} value={mile}>{mile}</option>
          ))}
        </select>
        <div className="input-line">How many minutes do you think it will take to run each mile, on average?</div>
        {pace ? <div className="selected">{pace} minutes per mile</div> : null}
        <select onChange={handlePace}>
          {minutes.map((minute, index) => (
            <option key={index} value={minute}>{minute}</option>
          ))}
        </select>
        <div className="input-line">What's your zip code?</div>
        <input className="input-line" className="zip-form" type="text" value={zip} placeholder="5 digit zip code" maxLength="5" onChange={handleZip} />
        <div>We use this to find your local sunset time.</div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Input;