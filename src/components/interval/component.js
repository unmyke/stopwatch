import React from "react";

const IntervalComponent = ({ currentInterval, disabled, changeInterval }) => {
  const currentIntervalIsNotSet = currentInterval === 0;
  const decrementIsDisabled = disabled || currentIntervalIsNotSet;
  const incrementIsDisabled = disabled;

  return (
    <div>
      <span>Интервал обновления секундомера: {currentInterval} сек.</span>
      <span>
        <button
          type="button"
          onClick={() => changeInterval(-1)}
          disabled={decrementIsDisabled}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => changeInterval(1)}
          disabled={incrementIsDisabled}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default IntervalComponent;
