import React from "react";
import Interval from "../interval";

import useTimer from "./use-timer";

const TimerComponent = ({ currentInterval }) => {
  // state
  const [
    { currentTime, isStarted },
    { handleStart, handleStop }
  ] = useTimer(currentInterval);

  // boolean state representation
  const isStopped = !isStarted;
  const intervalIsNotSetted = currentInterval === 0;
  const startIsDisable = intervalIsNotSetted || isStarted;

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
