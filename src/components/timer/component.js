import React from "react";
import Interval from "../interval";

class TimerComponent extends React.Component {
  state = {
    currentTime: 0
  };

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
    setInterval(
      () =>
        this.setState({
          currentTime: this.state.currentTime + this.props.currentInterval
        }),
      this.props.currentInterval * 1000
    );
  };

  handleStop = () => {
    this.setState({ currentTime: 0 });
  };
}

export default TimerComponent;
