import React from "react";
import Interval from "../interval";

import useTimerReducer from "./use-timer-reducer";

const TimerComponent = ({ currentInterval }) => {
  // state
  const [
    { currentTime, currentIntervalId },
    { dispatchIncreaseTime, dispatchUpdateIntervalId, dispatchReset }
  ] = useTimerReducer();

  // boolean state representation
  const isStarted = currentIntervalId !== 0;
  const isStopped = !isStarted;
  const intervalIsNotSetted = currentInterval === 0;
  const startIsDisable = intervalIsNotSetted || isStarted;

  // button handlers
  const handleStart = () => {
    const nextIntervalId = setInterval(() => {
      dispatchIncreaseTime(currentInterval);
    }, currentInterval * 1000);

    dispatchUpdateIntervalId(nextIntervalId);
  };

  const handleStop = () => {
    if (isStarted) {
      clearInterval(currentIntervalId);
      dispatchReset();
    }
  };

  // render
  return (
    <div>
      <Interval disabled={isStarted} />
      <div>Секундомер: {currentTime} сек.</div>
      <div>
        <button type="button" onClick={handleStart} disabled={startIsDisable}>
          Старт
        </button>
        <button type="button" onClick={handleStop} disabled={isStopped}>
          Стоп
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
