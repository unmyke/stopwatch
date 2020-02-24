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

  render() {
    return (
      <div>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <div>
          <button type="button" onClick={this.handleStart}>
            Старт
          </button>
          <button type="button" onClick={this.handleStop}>
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
