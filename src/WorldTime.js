import React, { useState, useEffect } from 'react';

const WorldApp = () => {
  const [timezones, setTimezones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetchTimezones();
  }, []);

  const fetchTimezones = async () => {
    try {
      const response = await fetch('http:localhost:3000/timezones.json');
      const data = await response.json();
      setTimezones(data);
    } catch (error) {
      console.error('Error fetching timezones:', error);
    }
  };

  const getTime = async (timezone) => {
    try {
      const response = await fetch(`/time/${timezone}`);
      const data = await response.json();
      setCurrentTime(data.time);
    } catch (error) {
      console.error('Error fetching time:', error);
    }
  };

  const handleTimezoneChange = (e) => {
    const timezone = e.target.value;
    setSelectedTimezone(timezone);
    getTime(timezone);
  };

  return (
    <center>
    <div>
      <h1>World Clock</h1>
      <select value={selectedTimezone} onChange={handleTimezoneChange}>
        <option value="">Select a timezone</option>
        {timezones.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
      <p> Time is: {currentTime} </p>
    </div>
    </center>
  );
};

export default WorldApp;
