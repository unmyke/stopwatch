import React from "react";

class IntervalComponent extends React.Component {
  render() {
    const { currentInterval, disabled, changeInterval } = this.props;
    const decrementIsDisabled = disabled || currentInterval === 0;

    return (
      <div>
        <span>
          Интервал обновления секундомера: {this.props.currentInterval} сек.
        </span>
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
            disabled={disabled}
          >
            +
          </button>
        </span>
      </div>
    );
  }
}

export default IntervalComponent;
