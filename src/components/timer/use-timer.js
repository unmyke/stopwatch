import { useState, useEffect } from "react";

const initialTime = 0;
const initialIntervalId = 0;

const useTimer = (interval) => {
  const [currentTime, setTime] = useState(initialTime);
  const [currentIntervalId, setIntervalId] = useState(initialIntervalId);

  const increaseTime = () => setTime((currentTime) => currentTime + interval);
  const isStarted = !!currentIntervalId

  // button handlers
  const handleStart = () => {
    const nextIntervalId = setInterval(() => {
      increaseTime();
    }, interval * 1000);

    setIntervalId(nextIntervalId);
  };

  const handleStop = () => {
    setTime(0);
    setIntervalId(0)
  };

  // clenup
  useEffect(() => {
    return () => {
      if (currentIntervalId) {
        clearInterval(currentIntervalId)
      }
    }
  }, [currentIntervalId]);
  
  return [
    { currentTime, isStarted },
    { handleStart, handleStop }
  ];
};

export default useTimer;
