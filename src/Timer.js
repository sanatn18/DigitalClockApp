import React, { useState, useEffect } from 'react';


function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (time > 0 && !timer) {
      const countdown = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setTimer(countdown);
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setTime(0);
  };

  const handleTimeChange = (event) => {
    const { value } = event.target;
    setTime(parseInt(value));
  };

  useEffect(() => {
    if (time === 0 && timer) {
      clearInterval(timer);
      setTimer(null);
      // Play sound notification
      const audio = new Audio('http://soundbible.com/grab.php?id=1252&type=mp3');
      audio.play();
      alert("Timer Terminated");
    }
  }, [time, timer]);

  return (
    <center>
    <div className="App">
      <h1>Set Timer</h1>
      <div className="timer">
        <label>Set time (in seconds):</label>
        <input type="number" value={time} onChange={handleTimeChange} />
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
    </center>
  );
}

export default App;
