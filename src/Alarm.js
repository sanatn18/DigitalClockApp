import React, { useState } from 'react';

const AlarmApp = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);

  const alarmSound = new Audio('http://soundbible.com/grab.php?id=1252&type=mp3'); // Replace with your alarm sound file

  const handleAlarmTimeChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleSetAlarm = () => {
    setIsAlarmSet(true);
    const alarmTimestamp = new Date(alarmTime).getTime();
    const currentTime = new Date().getTime();
    const timeUntilAlarm = alarmTimestamp - currentTime;

    setTimeout(() => {
      setIsAlarmSet(false);
      alarmSound.play();
      alert('Wake Up! Wake Up! WAKE UP!');
    }, timeUntilAlarm);
  };

  return (
    <center>
    <div>
      <h1> Set Alarm</h1>
      <input
        type="datetime-local"
        value={alarmTime}
        onChange={handleAlarmTimeChange}
      />
      <button disabled={isAlarmSet} onClick={handleSetAlarm}>
        Set Alarm
      </button>
    </div>
    </center>
  );
};

export default AlarmApp;

