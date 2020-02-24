import React from "react";

class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>
          Интервал обновления секундомера: {this.props.currentInterval} сек.
        </span>
        <span>
          <button type="button" onClick={() => this.props.changeInterval(-1)}>
            -
          </button>
          <button type="button" onClick={() => this.props.changeInterval(1)}>
            +
          </button>
        </span>
      </div>
    );
  }
}

export default IntervalComponent;
