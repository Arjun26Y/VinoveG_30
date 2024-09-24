import React, { useState, useEffect } from "react";
import "../custom_style/timer.css"; // Create a separate CSS file for styling

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">{seconds}s</h1>
      <div className="timer-buttons">
        <button className="btn" onClick={handleStart}>Start</button>
        <button className="btn" onClick={handlePause}>Pause</button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
