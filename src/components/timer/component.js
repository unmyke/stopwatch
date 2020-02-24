import React from "react";
import Interval from "../interval";

class TimerComponent extends React.Component {
  initState = {
    currentTime: 0,
    currentIntervalId: 0
  };
  state = this.initState;

  isStarted = () =>
    this.state.currentIntervalId !== this.initState.currentIntervalId;
  intervalIsNotSet = () => this.props.currentInterval === 0;
  startIsDisabled = () => this.intervalIsNotSet() || this.isStarted();
  stopIsDisabled = () => !this.isStarted();

  render() {
    const {
      state: { currentTime },
      isStarted,
      startIsDisabled,
      stopIsDisabled,
      handleStart,
      handleStop
    } = this;

    return (
      <div>
        <Interval disabled={isStarted()} />
        <div>Секундомер: {currentTime} сек.</div>
        <div>
          <button
            type="button"
            onClick={handleStart}
            disabled={startIsDisabled()}
          >
            Старт
          </button>
          <button
            type="button"
            onClick={handleStop}
            disabled={stopIsDisabled()}
          >
            Стоп
          </button>
        </div>
      </div>
    );
  }

  handleStart = () => {
    const nextIntervalId = setInterval(() => {
      const nextTime = this.state.currentTime + this.props.currentInterval;

      this.setState({ currentTime: nextTime });
    }, this.props.currentInterval * 1000);

    this.setState({ currentIntervalId: nextIntervalId });
  };

  handleStop = () => {
    if (this.isStarted()) {
      clearInterval(this.state.currentIntervalId);
      this.setState({ ...this.initState });
    }
  };
}

export default TimerComponent;
